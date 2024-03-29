"use client"

import Link from "next/link";
import styles from "./AboutSection.module.scss";
import { useTranslations } from "next-intl";

export function AboutSection() {
    const t = useTranslations("Home.About");
    return (
        <div className={styles.sectionWrapper}>
            <div className={styles.lines}>
                <div className={styles.yellowLine}></div>
                <div className={styles.purpleLine}></div>
            </div>
            <div className={styles.infoWrapper}>
                <div className={styles.aboutUsWrapper}>
                    <div className={styles.subHeader}>
                        {t('heading')}
                    </div>
                    <div className={styles.contentWrapper}>
                        <h2 className={styles.aboutHeader}>
                            {t('main')}
                        </h2>
                        <p className={styles.description}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                        <Link href='/about-us'><span className={styles.aboutUsLink}>{t('link')} &gt;</span></Link>
                    </div>
                </div>
                <div className={styles.missionWrapper}>
                    <div className={styles.subHeader}>
                        {t('missionHeading')}
                    </div>
                    <div className={styles.contentWrapper}>
                        <h3 className={styles.missionHeader}>
                            {t('missionMain')}                       </h3>
                        <p className={styles.description}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
