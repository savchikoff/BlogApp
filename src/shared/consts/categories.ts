import business from '../assets/icons/business.svg';
import economy from '../assets/icons/economy.svg';
import startup from '../assets/icons/startup.svg';
import technology from '../assets/icons/technology.svg';

import { additionalRoutes } from './routes';

export const categories = {
	Business: {
		img: business,
		link: `${additionalRoutes.Category}/business`,
	},
	Startup: {
		img: startup,
		link: `${additionalRoutes.Category}/startup`,
	},
	Economy: {
		img: economy,
		link: `${additionalRoutes.Category}/economy`,
	},
	Technology: {
		img: technology,
		link: `${additionalRoutes.Category}/technology`,
	},
};

export enum Categories {
	BUSINESS = 'Business',
	STARTUP = 'Startup',
	ECONOMY = 'Economy',
	TECHNOLOGY = 'Technology',
}

export type CategoryType = keyof typeof categories;
