import { createOrderEmail } from './createOderEmail';
import { ResendAPI } from './resendApi';
import { Env, OrderInformation } from './types';

export default {
	async fetch(request: Request, env: Env): Promise<Response> {
		if (request.method !== 'POST') {
			return new Response('Method not allowed', { status: 405 });
		}

		if (!env.RESEND_API_KEY) {
			return new Response('No Resend API Key provided', { status: 500 });
		}

		const resendApi = new ResendAPI(env.RESEND_API_KEY);

		const data = (await request.json()) as OrderInformation;

		const email = createOrderEmail(data);
		console.log(email);

		const response = await resendApi.sendEmail(email);

		if (response.error) {
			console.log(response.error);
			return new Response('Failed to send email', { status: 500 });
		}

		return new Response('Email sent', { status: 200 });
	},
} satisfies ExportedHandler<Env>;
