import { onRequestGet } from '../functions/auth.js';

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    if (url.pathname === '/auth' && request.method === 'GET') {
      return onRequestGet({ request, env, ctx });
    }

    return env.ASSETS.fetch(request);
  },
};
