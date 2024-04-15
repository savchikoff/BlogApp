import business from 'public/icons/business.svg';
import economy from 'public/icons/economy.svg';
import startup from 'public/icons/startup.svg';
import technology from 'public/icons/technology.svg';

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
