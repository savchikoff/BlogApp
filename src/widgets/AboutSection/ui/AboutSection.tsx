'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { Slide, Zoom } from 'react-awesome-reveal';
import styles from './AboutSection.module.scss';
import { routes } from '@/shared/consts/routes';

export function AboutSection() {
    const t = useTranslations('Home.About');
    return (
        <section className={styles.sectionWrapper}>
            <div className={styles.lines}>
                <Slide>
                    <div className={styles.yellowLine} />
                </Slide>
                <Slide direction="right">
                    <div className={styles.purpleLine} />
                </Slide>
            </div>
            <div className={styles.infoWrapper}>
                <Zoom>
                    <div className={styles.aboutUsWrapper}>
                        <div className={styles.subHeader}>{t('heading')}</div>
                        <div className={styles.contentWrapper}>
                            <h2 className={styles.aboutHeader}>{t('main')}</h2>
                            <p className={styles.description}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                            <Link href={routes.About}>
                                <span className={styles.aboutUsLink}>{t('link')} &gt;</span>
                            </Link>
                        </div>
                    </div>
                </Zoom>
                <Zoom>
                    <div className={styles.missionWrapper}>
                        <div className={styles.subHeader}>{t('missionHeading')}</div>
                        <div className={styles.contentWrapper}>
                            <h3 className={styles.missionHeader}>{t('missionMain')}</h3>
                            <p className={styles.description}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>
                    </div>
                </Zoom>
            </div>
        </section>
    );
}
