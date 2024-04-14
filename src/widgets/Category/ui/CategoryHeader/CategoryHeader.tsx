'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { routes } from '@/shared/consts/routes';

import { ICategoryHeaderProps } from './CategoryHeader.interfaces';

import styles from './CategoryHeader.module.scss';
import container from '@/shared/styles/container.module.scss';

function CategoryHeader({ categoryName }: ICategoryHeaderProps) {
	const t = useTranslations('Categories');
	const capitalizedCategory =
		categoryName.charAt(0).toUpperCase() + categoryName.slice(1);
	return (
		<section className={styles.categoryHeaderContainer}>
			<div className={container.container}>
				<div className={styles.categoryHeaderWrapper}>
					<h1 className={styles.categoryHeaderHeading}>
						{t(capitalizedCategory)}
					</h1>
					<p className={styles.categoryHeaderDescription}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore.
					</p>
					<span className={styles.categoryHeaderBreadCrumbs}>
						<Link href={routes.Blog}>Blog</Link> &gt; {t(capitalizedCategory)}
					</span>
				</div>
			</div>
		</section>
	);
}

export default CategoryHeader;
