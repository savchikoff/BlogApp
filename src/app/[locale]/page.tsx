import { useTranslations } from 'next-intl';
import Navbar from '@/components/Navbar';
import styles from './page.module.scss';
import LocaleSwitcher from '@/components/LocaleSwitcher';

export default function Home() {
	const t = useTranslations('Index');
	return (
		<main className={styles.main}>
			<h1>{t('title')}</h1>
			<Navbar />
			<LocaleSwitcher />
		</main>
	);
}
