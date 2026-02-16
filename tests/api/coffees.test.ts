import { describe, it, expect } from 'vitest';
import app from '../../src/api/server.js';

describe('GET /api/coffees', () => {
  it('returns all 6 coffees with no filter', async () => {
    const res = await app.request('/api/coffees');
    const data = await res.json();
    expect(res.status).toBe(200);
    expect(data).toHaveLength(6);
  });

  it('filters by africa origin', async () => {
    const res = await app.request('/api/coffees?origin=africa');
    const data = await res.json() as any[];
    expect(data).toHaveLength(2);
    expect(data.every((c) => c.origin === 'africa')).toBe(true);
  });

  it('filters by americas origin', async () => {
    const res = await app.request('/api/coffees?origin=americas');
    const data = await res.json() as any[];
    expect(data).toHaveLength(3);
    expect(data.every((c) => c.origin === 'americas')).toBe(true);
  });

  it('filters by asia origin', async () => {
    const res = await app.request('/api/coffees?origin=asia');
    const data = await res.json() as any[];
    expect(data).toHaveLength(1);
    expect(data[0].name).toBe('Mandheling Reserve');
  });

  it('returns all coffees when origin is "all"', async () => {
    const res = await app.request('/api/coffees?origin=all');
    const data = await res.json();
    expect(data).toHaveLength(6);
  });
});
