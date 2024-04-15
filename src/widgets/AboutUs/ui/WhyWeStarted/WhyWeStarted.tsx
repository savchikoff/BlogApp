'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import people from 'public/images/people.webp';
import { Slide } from 'react-awesome-reveal';

import AboutSectionDescription from '../AboutSectionDescription/AboutSectionDescription';

import styles from './WhyWeStarted.module.scss';

function WhyWeStarted() {
	const t = useTranslations('AboutUs.WhyWeStarted');
	return (
		<Slide>
			<article className={styles.whyWeStartedWrapper}>
				<div className={styles.peopleWrapper}>
					<Image
						placeholder="blur"
						className={styles.peopleImg}
						layout="responsive"
						src={people}
						alt="people"
					/>
				</div>
				<AboutSectionDescription
					header={`${t('heading')}`}
					subheader="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
					text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat."
				/>
			</article>
		</Slide>
	);
}

export default WhyWeStarted;
