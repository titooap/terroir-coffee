import { describe, it, expect } from 'vitest';
import app from '../../src/api/server.js';

describe('POST /api/newsletter', () => {
  it('returns success for a valid email', async () => {
    const res = await app.request('/api/newsletter', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: 'test@example.com' }),
    });
    const data = await res.json();
    expect(res.status).toBe(200);
    expect(data.success).toBe(true);
    expect(data.message).toBe('Subscribed!');
  });

  it('returns 400 for an invalid email', async () => {
    const res = await app.request('/api/newsletter', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: 'not-an-email' }),
    });
    expect(res.status).toBe(400);
    const data = await res.json();
    expect(data.error).toBe('Invalid email format');
  });

  it('returns 400 for missing email', async () => {
    const res = await app.request('/api/newsletter', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({}),
    });
    expect(res.status).toBe(400);
    const data = await res.json();
    expect(data.error).toBe('Email is required');
  });

  it('returns 400 for missing body', async () => {
    const res = await app.request('/api/newsletter', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: '',
    });
    expect(res.status).toBe(400);
  });
});
