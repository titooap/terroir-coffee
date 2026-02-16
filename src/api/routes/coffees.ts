import { Hono } from 'hono';
import { coffees } from '../../data/coffees.js';

const coffeesRoute = new Hono();

coffeesRoute.get('/', (c) => {
  const origin = c.req.query('origin');
  const filtered = origin && origin !== 'all'
    ? coffees.filter((coffee) => coffee.origin === origin)
    : coffees;
  return c.json(filtered);
});

export { coffeesRoute };
