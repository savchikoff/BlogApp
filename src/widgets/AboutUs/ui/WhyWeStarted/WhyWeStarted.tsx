"use client"

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import AboutSectionDescription from '../AboutSectionDescription/AboutSectionDescription';
import styles from './WhyWeStarted.module.scss';
import people from "@/widgets/AboutUs/assets/people.jpg";

function WhyWeStarted() {
    const t = useTranslations("AboutUs.WhyWeStarted");
    return (
        <div className={styles.whyWeStartedWrapper}>
            <div className={styles.peopleWrapper}>
                <Image
                    className={styles.peopleImg}
                    layout="responsive"
                    src={people}
                    alt='people'
                />
            </div>
            <AboutSectionDescription
                header={`${t('heading')}`}
                subheader='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.'
                text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.'
            />
        </div>
    )
}

export default WhyWeStarted