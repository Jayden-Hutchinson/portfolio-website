import { ReactElement } from 'react';

export interface Env {
	RESEND_API_KEY: string;
}

export type Email = {
	from: string;
	to: string;
	subject: string;
	react: ReactElement;
};
export type Product = {
	name: string;
	quantity: number;
	price: number;
};


export type OrderInformation = {
	firstName: string;
	lastName: string;
	email: string;
	streetAddress: string;
	city: string;
	province: string;
	postalCode: string;
	products: Product[];
};
