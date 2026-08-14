export interface Env {
	RESEND_API_KEY: string;
}

export type Email = {
	from: string;
	to: string;
	subject: string;
	html: string;
};
