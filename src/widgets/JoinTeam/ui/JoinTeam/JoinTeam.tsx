'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { Slide } from 'react-awesome-reveal';

import { Button } from '@/shared';
import { routes } from '@/shared/consts/routes';

import styles from './JoinTeam.module.scss';

export function JoinTeam() {
	const t = useTranslations('JoinUs');
	return (
		<Slide>
			<section className={styles.joinTeamContainer}>
				<div className={styles.joinTeamWrapper}>
					<div className={styles.textWrapper}>
						<h2 className={styles.joinHeader}>{t('heading')}</h2>
						<p className={styles.joinDescription}>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt.
						</p>
					</div>
					<Button isPrimary>
						<Link data-cy="join-us" href={routes.Contacts}>
							{t('link')}
						</Link>
					</Button>
				</div>
			</section>
		</Slide>
	);
}
