import { Email, OrderInformation } from './types';
import { OrderEmail } from '../emails/OrderEmail';
import { businessInfo } from './businessInfo';

export function createOrderEmail(orderInformation: OrderInformation): Email {
	const fullName = `${orderInformation.firstName} ${orderInformation.lastName}` || 'New Order';

	return {
		from: businessInfo.domain,
		to: businessInfo.email,
		subject: `${fullName}`,
		react: <OrderEmail {...orderInformation} />,
	};
}
