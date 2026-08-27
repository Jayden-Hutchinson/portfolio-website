import { Resend } from 'resend';
import { Email } from './types';

export class ResendAPI {
	resend: Resend;

	constructor(apiKey: string) {
		this.resend = new Resend(apiKey);
	}

	async sendEmail({ from, to, subject, react }: Email) {
		return await this.resend.emails.send({ from, to, subject, react });
	}
}
