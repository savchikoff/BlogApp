"use client"

import { useTranslations } from 'next-intl';
import styles from './ContactInfo.module.scss';


function ContactInfo() {
    const t = useTranslations("ContactUs.ContactInfo")
    return (
        <section className={styles.contactInfoContainer}>
            <div className={styles.contactInfoWrapper}>
                <div className={styles.contactInfoSection}>
                    <div className={styles.contactInfoHeading}>{t("hoursHeading")}</div>
                    <div className={styles.line} />
                    <div className={styles.contactInfoDataWrapper}>
                        <p className={styles.contactInfoData}>{t("workingDays")}</p>
                        <p className={styles.contactInfoData}>{t("workingHours")} </p>
                        <p className={styles.contactInfoMessage}>{t("supportMessage")}</p>
                    </div>
                </div>
                <div className={styles.contactInfoSection}>
                    <div className={styles.contactInfoHeading}>{t("contactHeading")}</div>
                    <div className={styles.line} />
                    <div className={styles.contactInfoDataWrapper}>
                        <p className={styles.contactInfoData}>
                            <a href="callto: 020 7993 2905">020 7993 2905</a>
                        </p>
                        <p className={styles.contactInfoMessage}>
                            <a href="mailto: hello@finsweet.com">hello@finsweet.com</a>
                        </p>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default ContactInfo