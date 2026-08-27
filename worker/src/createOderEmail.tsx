import { Email, OrderInformation } from './types';
import { OrderEmail } from '../emails/OrderEmail';
import { businessInfo } from './businessInfo';

const to = 'jaydenh747@gmail.com';

export function createOrderEmail(orderInformation: OrderInformation): Email {
	const fullName = `${orderInformation.firstName} ${orderInformation.lastName}` || 'New Order';

	return {
		from: businessInfo.domain,
		to: to,
		subject: `${fullName}`,
		react: <OrderEmail {...orderInformation} />,
	};
}
