import assert from 'node:assert/strict';
import { test } from 'node:test';
import handler from '../api/contact.js';

function responseMock() {
  return {
    code: 200, body: undefined, headers: {},
    setHeader(key, value) { this.headers[key.toLowerCase()] = value; return this; },
    status(code) { this.code = code; return this; },
    json(body) { this.body = body; return this; },
  };
}
function requestMock(body, headers = {}, method = 'POST') {
  return { method, body, headers: { host: 'appliedquantitativereasoning.com', origin: 'https://appliedquantitativereasoning.com', ...headers }, socket: { remoteAddress: '127.0.0.1' } };
}

test('contact rejects bad methods, cross-site submissions and missing fields', async () => {
  let res = responseMock();
  await handler(requestMock({}, {}, 'GET'), res);
  assert.equal(res.code, 405);
  res = responseMock();
  await handler(requestMock({}, { origin: 'https://example.invalid' }), res);
  assert.equal(res.code, 403);
  res = responseMock();
  await handler(requestMock({}), res);
  assert.equal(res.code, 400);
  res = responseMock();
  await handler(requestMock({ name: 'N', email: 'user@example.com', message: 'M' }, { 'content-length': '99999' }), res);
  assert.equal(res.code, 413);
});

test('contact requires Turnstile and sends only after successful verification', async () => {
  const keys = ['TURNSTILE_SECRET', 'RESEND_API_KEY', 'CONTACT_TO_EMAIL', 'CONTACT_FROM_EMAIL', 'KV_REST_API_URL', 'KV_REST_API_TOKEN'];
  const original = Object.fromEntries(keys.map(key => [key, process.env[key]]));
  const originalFetch = globalThis.fetch;
  const calls = [];
  try {
    process.env.TURNSTILE_SECRET = 'test-turnstile-secret';
    process.env.RESEND_API_KEY = 'test-resend-key';
    process.env.CONTACT_TO_EMAIL = 'recipient@example.invalid';
    process.env.CONTACT_FROM_EMAIL = 'sender@example.invalid';
    delete process.env.KV_REST_API_URL;
    delete process.env.KV_REST_API_TOKEN;
    globalThis.fetch = async (url, options) => {
      calls.push({ url: String(url), options });
      if (String(url).includes('challenges.cloudflare.com/turnstile/v0/siteverify')) {
        return { ok: true, json: async () => ({ success: true }) };
      }
      if (String(url).includes('api.resend.com/emails')) return { ok: true, status: 200 };
      throw new Error('Unexpected outbound URL ' + url);
    };
    const valid = { name: 'Test', email: 'test@example.invalid', message: 'Test message' };
    let res = responseMock();
    await handler(requestMock(valid), res);
    assert.equal(res.code, 400, 'Missing Turnstile token must block delivery');
    assert.equal(calls.length, 0, 'No service should be called without a token');
    res = responseMock();
    await handler(requestMock({ ...valid, 'cf-turnstile-response': 'test-token' }), res);
    assert.equal(res.code, 200);
    assert.equal(res.body.ok, true);
    assert.equal(calls.length, 2);
    const delivery = JSON.parse(calls[1].options.body);
    assert.equal(delivery.reply_to, valid.email);
    assert.deepEqual(delivery.to, ['recipient@example.invalid']);
  } finally {
    globalThis.fetch = originalFetch;
    for (const key of keys) original[key] === undefined ? delete process.env[key] : process.env[key] = original[key];
  }
});
