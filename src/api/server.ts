import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { newsletterRoute } from './routes/newsletter.js';
import { coffeesRoute } from './routes/coffees.js';

const app = new Hono();

app.use('/api/*', cors());
app.route('/api/newsletter', newsletterRoute);
app.route('/api/coffees', coffeesRoute);

export default app;
