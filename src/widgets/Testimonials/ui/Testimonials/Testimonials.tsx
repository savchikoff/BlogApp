'use client';

import { useTranslations } from 'next-intl';
import { Zoom } from 'react-awesome-reveal';

import { TestimonialsSlider } from '../TestimonialsSlider/TestimonialsSlider';

import styles from './Testimonials.module.scss';

export function Testimonials() {
	const t = useTranslations('Home.Testimonials');
	return (
		<Zoom>
			<section className={styles.testimonialsContainer}>
				<div className={styles.testimonialsWrapper}>
					<div className={styles.testimonialsInfo}>
						<div className={styles.testimonialsSubheader}>
							{t('subHeading')}
						</div>
						<h2 className={styles.testimonialsHeader}>{t('heading')}</h2>
						<p className={styles.testimonialsDescription}>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor.
						</p>
					</div>
					<div className={styles.line} />
					<TestimonialsSlider />
				</div>
			</section>
		</Zoom>
	);
}
