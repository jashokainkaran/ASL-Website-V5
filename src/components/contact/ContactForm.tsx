'use client';
import {useActionState, useEffect, useRef} from 'react';
import {scene} from '@/lib/scene-store';
import {animate} from 'animejs';
import {submitEnquiry} from '@/app/contact/actions';
import {contactCopy as copy, projectTypes} from '@/content/contact';
import {initialEnquiryState, type EnquiryField} from '@/lib/contact-validation';

const labels: Record<EnquiryField, string> = {name: 'Your name', email: 'Work email', company: 'Company / organisation', projectType: 'What are you looking for?', details: 'Tell us about the project', timeline: 'Timeline', budget: 'Budget range'};
export function ContactForm({configured}: {configured: boolean}) {
  const [state, action, pending] = useActionState(submitEnquiry, initialEnquiryState);
  const feedback = useRef<HTMLDivElement>(null);
  useEffect(() => {
    scene.contactReceipt = state.status === 'success' ? 1 : 0;
    if (state.status === 'idle') return;
    feedback.current?.focus({preventScroll: false});
    const motion = feedback.current ? animate(feedback.current, {opacity: [.6, 1], duration: 220, ease: 'outQuad'}) : null;
    return () => {motion?.cancel();scene.contactReceipt=0;};
  }, [state]);
  const description = (field: EnquiryField) => [field === 'details' ? 'details-help' : '', state.errors[field] ? `${field}-error` : ''].filter(Boolean).join(' ') || undefined;
  const error = (field: EnquiryField) => state.errors[field] && <p className="field-error" id={`${field}-error`}>{state.errors[field]}</p>;
  const input = (field: EnquiryField, optional = false, type = 'text', maxLength = 200) => <div className="enquiry-field">
    <label htmlFor={field}>{labels[field]}{optional && <span>Optional</span>}</label>
    <input id={field} name={field} type={type} defaultValue={state.values[field]} required={!optional} maxLength={maxLength} autoComplete={field === 'name' ? 'name' : field === 'email' ? 'email' : field === 'company' ? 'organization' : 'off'} aria-invalid={!!state.errors[field]} aria-describedby={description(field)}/>{error(field)}
  </div>;
  if (state.status === 'success') return <div className="enquiry-success" ref={feedback} tabIndex={-1} role="status"><span className="eyebrow">Project enquiry</span><h2>{copy.successHeading}</h2><p>{copy.successBody}</p></div>;
  return <form id="enquiry" action={action} noValidate className="enquiry-form" aria-busy={pending} key={state.attempt}>
    <div className="form-heading eyebrow"><span>Project enquiry</span><span>01 / Start a conversation</span></div>
    {!configured && <p className="delivery-notice">{copy.unavailable}</p>}
    {state.status !== 'idle' && <div className="enquiry-feedback" ref={feedback} tabIndex={-1} role="alert"><h2>{state.message}</h2>{Object.keys(state.errors).length > 0 && <ul>{Object.entries(state.errors).map(([field, message]) => <li key={field}><a href={`#${field}`}>{message}</a></li>)}</ul>}</div>}
    <div className="form-pair">{input('name', false, 'text', 120)}{input('email', false, 'email', 254)}</div>
    {input('company', true)}
    <div className="enquiry-field"><label htmlFor="projectType">{labels.projectType}</label><select id="projectType" name="projectType" defaultValue={state.values.projectType} required aria-invalid={!!state.errors.projectType} aria-describedby={description('projectType')}><option value="">Select a project type</option>{projectTypes.map(type => <option key={type}>{type}</option>)}</select>{error('projectType')}</div>
    <div className="enquiry-field"><label htmlFor="details">{labels.details}</label><p className="field-helper" id="details-help">{copy.detailsHelp}</p><textarea id="details" name="details" defaultValue={state.values.details} required maxLength={5000} rows={4} aria-invalid={!!state.errors.details} aria-describedby={description('details')}/>{error('details')}</div>
    <div className="form-pair">{input('timeline', true)}{input('budget', true)}</div>
    <div className="enquiry-trap" aria-hidden="true"><label htmlFor="website">Website</label><input id="website" name="website" tabIndex={-1} autoComplete="off"/></div>
    <div className="enquiry-submit"><button className="button" type="submit" disabled={pending}>{pending ? 'Sending enquiry…' : copy.submit}<span aria-hidden="true">↗</span></button><span>Required fields: name, email,<br/>project type and details.</span></div>
    <p className="form-data-note">These details are used to discuss your project enquiry.</p>
  </form>;
}
