import React from 'react';
import styles from './AboutSectionDescription.module.scss';
import { IAboutSectionDescriptionProps } from './AboutSectionDescription.interfaces';

function AboutSectionDescription({
	header,
	subheader,
	text,
}: IAboutSectionDescriptionProps) {
	return (
		<section className={styles.sectionDescriptionWrapper}>
			<h2 className={styles.sectionDescriptionHeader}>{header}</h2>
			<h5 className={styles.sectionDescriptionSubheader}>{subheader}</h5>
			<p className={styles.sectionDescriptionDescription}>{text}</p>
		</section>
	);
}

export default AboutSectionDescription;
