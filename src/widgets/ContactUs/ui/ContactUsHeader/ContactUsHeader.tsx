'use client';

import { useTranslations } from 'next-intl';
import { Zoom } from 'react-awesome-reveal';

import styles from './ContactUsHeader.module.scss';

function ContactUsHeader() {
	const t = useTranslations('ContactUs.ContactHeader');
	return (
		<section className={styles.contactUsHeaderContainer}>
			<Zoom>
				<div className={styles.contactUsHeaderWrapper}>
					<div className={styles.contactUsSubheading}>{t('subHeading')}</div>
					<h1 className={styles.contactUsHeading}>{t('heading')}</h1>
					<p className={styles.contactUsDescription}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim.
					</p>
				</div>
			</Zoom>
		</section>
	);
}

export default ContactUsHeader;
