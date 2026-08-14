/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Bind resources to your worker in `wrangler.jsonc`. After adding bindings, a type definition for the
 * `Env` object can be regenerated with `npm run cf-typegen`.
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

import { ResendAPI } from './resendApi';
import { Env } from './types';

export default {
	async fetch(request: Request, env: Env): Promise<Response> {
		if (request.method !== 'POST') {
			return new Response('Method not allowed', { status: 405 });
		}

		const resendApi = new ResendAPI(env.RESEND_API_KEY);

		const data = await request.json();

		const email = {
			from: 'orders@yourdomain.com',
			to: 'owner@yourdomain.com',
			subject: 'New Order',
			html: '',
			// html: `
			// 	<h1>New Order</h1>
			// 	<p>Name: ${data.name}</p>
			// 	<p>Email: ${data.email}</p>
			// 	<p>Order: ${data.order}</p>
			// `,
		};

		const response = await resendApi.sendEmail(email);

		if (!response.ok) {
			return new Response('Failed to send email', { status: 500 });
		}

		return new Response('Email sent', { status: 200 });
	},
} satisfies ExportedHandler<Env>;
