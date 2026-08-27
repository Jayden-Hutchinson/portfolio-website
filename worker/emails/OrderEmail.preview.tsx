import { OrderEmail } from './OrderEmail';

function Preview() {
	return (
		<OrderEmail
			firstName="John"
			lastName="Smith"
			email="john@example.com"
			streetAddress="123 Main Street"
			city="Vancouver"
			province="BC"
			postalCode="V5K 0A1"
			products={[
				{
					name: 'Sweet Sriracha',
					quantity: 2,
					price: 10,
				},
			]}
		/>
	);
}

export default Preview;
