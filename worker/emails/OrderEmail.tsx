import { Body, Head, Html, Text } from 'react-email';
import { OrderInformation } from '../src/types';
import { Tailwind } from 'react-email';

export function OrderEmail({ firstName, lastName, email, streetAddress, city, province, postalCode, products }: OrderInformation) {
	const fullName = `${firstName} ${lastName}`;
	const totalPrice = products.reduce((total, product) => total + product.price * product.quantity, 0);

	return (
		<Html>
			<Head />
			<Tailwind>
				<Body>
					<table className="w-[50%] mb-10">
						<tbody>
							<tr>
								<td>Name:</td>
								<td>{fullName}</td>
							</tr>
							<tr>
								<td>Email:</td>
								<td>{email}</td>
							</tr>
							<tr>
								<td>Address:</td>
								<td>
									{streetAddress}, {city}, {province}, {postalCode}
								</td>
							</tr>
						</tbody>
					</table>

					<table className="w-[50%]">
						<thead>
							<tr>
								<th className="text-left pb-2">Product</th>
								<th className="text-left pb-2">Qty.</th>
								<th className="text-left pb-2">Total</th>
							</tr>
						</thead>

						<tbody>
							{products &&
								products.map((product) => (
									<tr key={product.name}>
										<td>{product.name}</td>
										<td>{product.quantity}</td>
										<td>${(product.price * product.quantity).toFixed(2)}</td>
									</tr>
								))}
							<tr>
								<td className="py-5"></td>
								<td className="font-bold">Total</td>
								<td>${totalPrice.toFixed(2)}</td>
							</tr>
						</tbody>
					</table>
				</Body>
			</Tailwind>
		</Html>
	);
}

export default OrderEmail;
