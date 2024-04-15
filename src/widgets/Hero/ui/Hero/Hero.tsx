'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { Zoom } from 'react-awesome-reveal';

import { Button } from '@/shared';
import { blogPosts } from '@/shared/consts/blogPosts';
import { additionalRoutes } from '@/shared/consts/routes';

import styles from './Hero.module.scss';
import container from '@/shared/styles/container.module.scss';

export function Hero() {
	const t = useTranslations('FeaturedPost');
	const tCategories = useTranslations('Categories');

	const { category, title, author, createdAt, text, id } = blogPosts[0];

	return (
		<section className={styles.headerContainer}>
			<div className={container.container}>
				<Zoom>
					<div className={styles.contentWrapper}>
						<div className={styles.infoWrapper}>
							<p className={styles.subHeader}>
								{t('postedOn')} <strong>{tCategories(category)}</strong>
							</p>
							<h1 className={styles.mainHeader}>{title}</h1>
							<div className={styles.articleInfo}>
								By <span className={styles.authorInfo}>{author}</span> |{' '}
								{createdAt}
							</div>
							<p className={styles.description}>{text}</p>
						</div>
						<Button isPrimary>
							<Link href={`${additionalRoutes.Posts}/${id}`}>{t('link')} &gt;</Link>
						</Button>
					</div>
				</Zoom>
			</div>
		</section>
	);
}
