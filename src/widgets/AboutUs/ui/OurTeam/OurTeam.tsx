'use client';

import { useTranslations } from 'next-intl';
import { Slide } from 'react-awesome-reveal';
import Image from 'next/image';
import styles from './OurTeam.module.scss';
import AboutSectionDescription from '../AboutSectionDescription/AboutSectionDescription';
import handShake from '@/widgets/AboutUs/assets/handshake.webp';

function OurTeam() {
	const t = useTranslations('AboutUs.OurTeam');
	return (
		<Slide direction="right">
			<article className={styles.ourTeamWrapper}>
				<AboutSectionDescription
					header={`${t('heading')}`}
					subheader="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
					text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat."
				/>
				<div className={styles.handShakeWrapper}>
					<Image
						placeholder="blur"
						className={styles.handShakeImg}
						layout="responsive"
						src={handShake}
						alt="handshake"
					/>
				</div>
			</article>
		</Slide>
	);
}

export default OurTeam;
