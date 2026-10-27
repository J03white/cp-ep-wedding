import { onRequestGet } from '../functions/auth.js';
import { onRequestPost } from '../functions/rsvp.js';
import { siteGate } from '../functions/site-gate.js';

export default {
  async fetch(request, env, ctx) {
    const gate = await siteGate(request, env);
    if (gate) return gate;

    const url = new URL(request.url);

    if (url.pathname === '/auth' && request.method === 'GET') {
      return onRequestGet({ request, env, ctx });
    }

    if (url.pathname === '/rsvp' && request.method === 'POST') {
      return onRequestPost({ request, env, ctx });
    }

    return env.ASSETS.fetch(request);
  },
};
