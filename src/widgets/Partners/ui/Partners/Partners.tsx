'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { Slide } from 'react-awesome-reveal';

import { partners } from '../../model/consts/partners';

import styles from './Partners.module.scss';

export function Partners() {
	const t = useTranslations('Home.Partners');
	return (
		<section className={styles.partnersContainer}>
			<div className={styles.partnersWrapper}>
				<Slide>
					<div className={styles.partnersTextContent}>
						<div className={styles.partnersSubHeader}>{t('subHeading')}</div>
						<h6 className={styles.partnersHeader}>{t('heading')}</h6>
					</div>
				</Slide>
				<Slide direction="right">
					{partners.map(({ alt, img, id }) => (
						<Link key={id} href="/">
							<Image className={styles.partnerImg} src={img} alt={alt} />
						</Link>
					))}
				</Slide>
			</div>
		</section>
	);
}
