"use client"

import { useTranslations } from 'next-intl';
import { Button } from '@/shared';
import styles from './JoinTeam.module.scss';
import Link from 'next/link';
import { routes } from '@/shared/consts/routes';

export function JoinTeam() {
    const t = useTranslations("JoinUs");
    return (
        <div className={styles.joinTeamContainer}>
            <div className={styles.joinTeamWrapper}>
                <div className={styles.textWrapper}>
                    <h3 className={styles.joinHeader}>{t("heading")}</h3>
                    <p className={styles.joinDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                </div>
                <Button isPrimary><Link href={routes.Contacts}>{t("link")}</Link></Button>
            </div>
        </div>
    )
}