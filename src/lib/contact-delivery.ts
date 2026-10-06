import 'server-only';
import type {Enquiry} from './contact-validation';

/** Approved server-only receiver must durably accept before replying {received:true}. */
export function enquiryDeliveryConfigured() {
  try {return new URL(process.env.ASL_ENQUIRY_ENDPOINT || '').protocol === 'https:';} catch {return false;}
}
export async function deliverEnquiry(enquiry: Enquiry, id: string): Promise<boolean> {
  if (!enquiryDeliveryConfigured()) return false;
  const response = await fetch(process.env.ASL_ENQUIRY_ENDPOINT!, {
    method: 'POST', redirect: 'error', cache: 'no-store', signal: AbortSignal.timeout(10000),
    headers: {'Content-Type': 'application/json', 'Idempotency-Key': id, ...(process.env.ASL_ENQUIRY_TOKEN ? {Authorization: `Bearer ${process.env.ASL_ENQUIRY_TOKEN}`} : {})},
    body: JSON.stringify({id, source: 'ASL contact', enquiry}),
  });
  if (!response.ok) return false;
  const receipt: unknown = await response.json();
  return typeof receipt === 'object' && receipt !== null && 'received' in receipt && receipt.received === true;
}
