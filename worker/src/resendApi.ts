import { Email } from './types';

export class ResendAPI {
	apiKey: string;

	constructor(apiKey: string) {
		this.apiKey = apiKey;
	}

	async sendEmail(email: Email) {
		const response = await fetch('https://api.resend.com/emails', {
			method: 'POST',
			headers: {
				Authorization: `Bearer ${this.apiKey}`,
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(email),
		});

		return response;
	}
}
