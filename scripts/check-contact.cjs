/* eslint-disable @typescript-eslint/no-require-imports -- Isolated TypeScript contract tests. */
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const ts = require('typescript');
const path = require('node:path');
function load(file, dependencies, globals = {}) {
  const testModule = {exports: {}};
  const code = ts.transpileModule(fs.readFileSync(path.join(__dirname, '..', file), 'utf8'), {compilerOptions: {module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022}}).outputText;
  vm.runInNewContext(code, {module: testModule, exports: testModule.exports, require: name => name in dependencies ? dependencies[name] : require(name), ...globals}, {filename: file});
  return testModule.exports;
}
async function check() {
  const copy = load('src/content/contact.ts', {});
  const validation = load('src/lib/contact-validation.ts', {'../content/contact': copy});
  const valid = {name: 'QA enquiry', email: 'qa@example.test', company: '', projectType: 'Development', details: 'Local contract test only.', timeline: '', budget: ''};
  assert.equal(Object.keys(validation.validateEnquiry(valid)).length, 0);
  assert.equal(Object.keys(validation.validateEnquiry(validation.emptyEnquiry)).length, 4);
  for (const [field, value] of [['name', '   '], ['email', 'invalid'], ['projectType', 'invented'], ['details', 'x'.repeat(5001)], ['budget', 'x'.repeat(201)]]) {
    assert.ok(validation.validateEnquiry({...valid, [field]: value})[field]);
  }
  let calls = 0;
  let acknowledgement = {received: true};
  let ok = true;
  const env = {};
  const delivery = load('src/lib/contact-delivery.ts', {'server-only': {}}, {process: {env}, URL, AbortSignal, fetch: async (_url, options) => {
    calls++;
    assert.equal(options.redirect, 'error');
    assert.equal(options.headers['Idempotency-Key'], 'qa-receipt');
    return {ok, json: async () => acknowledgement};
  }});
  assert.equal(await delivery.deliverEnquiry(valid, 'qa-receipt'), false);
  assert.equal(calls, 0, 'Unconfigured delivery must not transmit');
  env.ASL_ENQUIRY_ENDPOINT = 'http://receiver.example.test';
  assert.equal(delivery.enquiryDeliveryConfigured(), false);
  env.ASL_ENQUIRY_ENDPOINT = 'https://receiver.example.test';
  assert.equal(await delivery.deliverEnquiry(valid, 'qa-receipt'), true);
  for (const receipt of [{}, {received: false}, {received: 'true'}, null]) {
    acknowledgement = receipt;
    assert.equal(await delivery.deliverEnquiry(valid, 'qa-receipt'), false, 'HTTP success alone must never fake receipt');
  }
  acknowledgement = {received: true}; ok = false;
  assert.equal(await delivery.deliverEnquiry(valid, 'qa-receipt'), false);
  let configured = false, received = false, submitted = 0;
  const actions = load('src/app/contact/actions.ts', {
    '@/content/contact': copy, '@/lib/contact-validation': validation,
    '@/lib/contact-delivery': {enquiryDeliveryConfigured: () => configured, deliverEnquiry: async () => {submitted++; return received;}},
  });
  const form = values => {const data = new FormData(); for (const [key, value] of Object.entries(values)) data.set(key, value); return data;};
  const invalid = await actions.submitEnquiry(validation.initialEnquiryState, form({}));
  assert.equal(invalid.status, 'invalid'); assert.equal(submitted, 0);
  const unavailable = await actions.submitEnquiry(validation.initialEnquiryState, form(valid));
  assert.equal(unavailable.status, 'error'); assert.equal(submitted, 0); assert.equal(unavailable.values.details, valid.details);
  configured = true;
  assert.equal((await actions.submitEnquiry(validation.initialEnquiryState, form({...valid, website: 'bot'}))).status, 'error');
  assert.equal(submitted, 0);
  assert.equal((await actions.submitEnquiry(validation.initialEnquiryState, form(valid))).status, 'error');
  received = true;
  assert.equal((await actions.submitEnquiry(validation.initialEnquiryState, form(valid))).status, 'success');
  await actions.submitEnquiry(validation.initialEnquiryState, form(valid));
  assert.equal((await actions.submitEnquiry(validation.initialEnquiryState, form(valid))).status, 'error');
  assert.equal(submitted, 3, 'Throttle must stop extra delivery attempts');
  console.log('Contact validation, retained values, missing config, honeypot, explicit receipt and throttling passed. No external requests sent.');
}
check().catch(error => {console.error(error); process.exitCode = 1;});
