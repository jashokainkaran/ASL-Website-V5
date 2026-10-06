'use server';
import {createHash, randomUUID} from 'node:crypto';
import {contactCopy} from '@/content/contact';
import {deliverEnquiry, enquiryDeliveryConfigured} from '@/lib/contact-delivery';
import {enquiryFields, validateEnquiry, type Enquiry, type EnquiryState} from '@/lib/contact-validation';

// Bounded per-process throttle. Replace with shared storage when running multiple instances.
const recent = new Map<string, {count: number; expires: number}>();
export async function submitEnquiry(previous: EnquiryState, form: FormData): Promise<EnquiryState> {
  const values = Object.fromEntries(enquiryFields.map(field => [field, String(form.get(field) || '').trim()])) as Enquiry;
  const state: EnquiryState = {status: 'error', message: contactCopy.failure, errors: {}, values, attempt: (Number(previous.attempt) || 0) + 1};
  state.errors = validateEnquiry(values);
  if (Object.keys(state.errors).length) return {...state, status: 'invalid', message: 'Please check the following details.'};
  if (form.get('website')) return state;
  if (!enquiryDeliveryConfigured()) return {...state, message: contactCopy.unavailable};
  const now = Date.now();
  for (const [key, entry] of recent) if (entry.expires <= now) recent.delete(key);
  const key = createHash('sha256').update(values.email.toLowerCase()).digest('hex');
  const attempts = recent.get(key);
  if ((attempts?.count || 0) >= 3 || recent.size >= 1000) return {...state, message: 'Too many enquiries were attempted. Please wait a few minutes and try again.'};
  recent.set(key, {count: (attempts?.count || 0) + 1, expires: attempts?.expires || now + 600000});
  try {
    if (await deliverEnquiry(values, randomUUID())) return {...state, status: 'success', message: '', values: {name: '', email: '', company: '', projectType: '', details: '', timeline: '', budget: ''}};
  } catch {
    // No payload, credentials or private project details are logged.
  }
  return state;
}
