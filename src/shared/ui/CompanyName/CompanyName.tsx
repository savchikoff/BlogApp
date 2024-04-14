import Link from 'next/link';

import { routes } from '@/shared/consts/routes';

import styles from './CompanyName.module.scss';

export function CompanyName() {
	return (
		<Link href={routes.Home} className={styles.companyName}>
			Modsen Client Blog
		</Link>
	);
}
