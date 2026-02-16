import { Hono } from 'hono';

const newsletterRoute = new Hono();

newsletterRoute.post('/', async (c) => {
  const body = await c.req.json().catch(() => null);

  if (!body || !body.email) {
    return c.json({ error: 'Email is required' }, 400);
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(body.email)) {
    return c.json({ error: 'Invalid email format' }, 400);
  }

  console.log('Newsletter signup:', body.email);
  return c.json({ success: true, message: 'Subscribed!' });
});

export { newsletterRoute };
