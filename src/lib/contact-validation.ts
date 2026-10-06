import {projectTypes} from '../content/contact';
export const enquiryFields = ['name', 'email', 'company', 'projectType', 'details', 'timeline', 'budget'] as const;
export type EnquiryField = typeof enquiryFields[number];
export type Enquiry = Record<EnquiryField, string>;
export type EnquiryErrors = Partial<Record<EnquiryField, string>>;
export const emptyEnquiry: Enquiry = {name: '', email: '', company: '', projectType: '', details: '', timeline: '', budget: ''};
export function validateEnquiry(values: Enquiry): EnquiryErrors {
  const errors: EnquiryErrors = {};
  if (!values.name.trim()) errors.name = 'Enter your name.';
  else if (values.name.length > 120) errors.name = 'Keep your name under 120 characters.';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email) || values.email.length > 254) errors.email = 'Enter a valid email address.';
  if (!projectTypes.some(type => type === values.projectType)) errors.projectType = 'Choose what you are looking for.';
  if (!values.details.trim()) errors.details = 'Tell us a little about the project.';
  else if (values.details.length > 5000) errors.details = 'Keep project details under 5,000 characters.';
  for (const field of ['company', 'timeline', 'budget'] as const) if (values[field].length > 200) errors[field] = 'Keep this under 200 characters.';
  return errors;
}
export type EnquiryState = {status: 'idle' | 'invalid' | 'error' | 'success'; message: string; errors: EnquiryErrors; values: Enquiry; attempt: number};
export const initialEnquiryState: EnquiryState = {status: 'idle', message: '', errors: {}, values: emptyEnquiry, attempt: 0};
