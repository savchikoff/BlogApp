import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';

import { locales } from './config';

export default getRequestConfig(async ({ locale }) => {
	if (!locales.includes(locale as any)) notFound();

	return {
		messages: (
			await (locale === 'en'
				? import('../../../public/locales/en.json')
				: import(`../../../public/locales/${locale}.json`))
		).default,
	};
});
