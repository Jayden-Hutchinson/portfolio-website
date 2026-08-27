import { Body, Head, Html, Text } from 'react-email';
import { OrderInformation } from '../src/types';
import { Tailwind } from 'react-email';

export function OrderEmail({ firstName, lastName, email, streetAddress, city, province, postalCode, products }: OrderInformation) {
	const fullName = `${firstName} ${lastName}`;

	return (
		<Html>
			<Head />
			<Tailwind>
				<Body>
					<strong>{fullName}</strong>
					<Text>{email}</Text>
					<Text>
						{streetAddress}, {city}, {province}, {postalCode}
					</Text>
					<table className="text-center w-[50%]">
						<thead>
							<tr>
								<th>Product</th>
								<th>Quantity</th>
								<th>Total</th>
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
						</tbody>
					</table>
				</Body>
			</Tailwind>
		</Html>
	);
}

export default OrderEmail;
