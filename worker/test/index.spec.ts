import { env, SELF } from 'cloudflare:test';
import { describe, it, expect } from 'vitest';
import worker from '../src/index';

// For now, you'll need to do something like this to get a correctly-typed
// `Request` to pass to `worker.fetch()`.
const IncomingRequest = Request<unknown, IncomingRequestCfProperties>;

describe('Email Worker', () => {
	it('has the Resend API key', () => {
		console.log(env.RESEND_API_KEY);
		expect(env.RESEND_API_KEY).toBeDefined();
	});

	it('sends an email through Resend', async () => {
		const response = await SELF.fetch('http://127.0.0.1:8787', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				name: 'Jayden',
				email: 'jaydenh747@gmail.com',
				order: [{ name: 'Sweet Sriracha', quantity: 2 }],
			}),
		});

		const body = await response.text();
		console.log('Status:', response.status);
		console.log('Status Text:', response.statusText);
		console.log('Body:', body);

		expect(response.ok).toBe(true);
	});
});
