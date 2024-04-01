"use client"

import { useTranslations } from 'next-intl';
import { Zoom } from 'react-awesome-reveal';
import styles from './PrivacyHeader.module.scss';

function PrivacyHeader() {
    const t = useTranslations("PrivacyPolicy")
    return (
        <div className={styles.privacyHeaderContainer}>
            <Zoom>
                <div className={styles.privacyHeaderWrapper}>
                    <h2 className={styles.privacyHeading}>{t("heading")}</h2>
                    <p className={styles.updateTime}>{t("updateInfo")}</p>
                </div>
            </Zoom>
        </div>
    )
}

export default PrivacyHeader