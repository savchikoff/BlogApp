import { createLocalizedPathnamesNavigation } from 'next-intl/navigation';

import { localePrefix, locales, pathnames } from '../config/config';

export const { Link, redirect, usePathname, useRouter } =
	createLocalizedPathnamesNavigation({
		locales,
		pathnames,
		localePrefix,
	});
