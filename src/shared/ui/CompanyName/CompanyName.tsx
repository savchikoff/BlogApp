import Link from 'next/link';
import styles from './CompanyName.module.scss';
import { routes } from '@/shared/consts/routes';

export function CompanyName() {
	return (
		<Link href={routes.Home} className={styles.companyName}>
			Modsen Client Blog
		</Link>
	);
}
