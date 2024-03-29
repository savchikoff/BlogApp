"use client"

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import styles from './Partners.module.scss';
import { partners } from '../consts/partners';
import Link from 'next/link';

export function Partners() {
    const t = useTranslations("Home.Partners");
    return (
        <div className={styles.partnersContainer}>
            <div className={styles.partnersWrapper}>
                <div className={styles.partnersTextContent}>
                    <div className={styles.partnersSubHeader}>{t("subHeading")}</div>
                    <h6 className={styles.partnersHeader}>{t("heading")}</h6>
                </div>
                {partners.map(({ alt, img, id }) =>
                    <Link key={id} href="">
                        <Image className={styles.partnerImg} src={img} alt={alt} />
                    </Link>
                )}
            </div>
        </div>
    )
}