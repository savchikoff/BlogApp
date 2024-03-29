"use client"

import { useTranslations } from 'next-intl';
import styles from './ContactUsHeader.module.scss';

function ContactUsHeader() {
    const t = useTranslations("ContactUs.ContactHeader");
    return (
        <div className={styles.contactUsHeaderContainer}>
            <div className={styles.contactUsHeaderWrapper}>
                <div className={styles.contactUsSubheading}>
                    {t("subHeading")}
                </div>
                <h1 className={styles.contactUsHeading}>
                    {t("heading")}
                </h1>
                <p className={styles.contactUsDescription}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.
                </p>
            </div>
        </div>
    )
}

export default ContactUsHeader