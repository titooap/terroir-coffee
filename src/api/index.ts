import { serve } from '@hono/node-server';
import app from './server.js';

const port = 3001;

serve({ fetch: app.fetch, port }, () => {
  console.log(`Hono API server running on http://localhost:${port}`);
});
