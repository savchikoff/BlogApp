'use client';

import { useTranslations } from 'next-intl';

import NewsLetterForm from '../NewsLetterForm/NewsLetterForm';

import styles from './NewsLetterSubscription.module.scss';

export function NewsLetterSubscription() {
	const t = useTranslations('Footer');
	return (
		<div className={styles.formWrapper}>
			<h2 className={styles.footerFormHeader}>{t('formHeading')}</h2>
			<NewsLetterForm />
		</div>
	);
}
