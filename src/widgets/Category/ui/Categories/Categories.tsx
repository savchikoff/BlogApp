'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { categories, CategoryType } from '@/shared/consts/categories';

import styles from './Categories.module.scss';

function Categories() {
	const t = useTranslations('Categories');
	return (
		<section className={styles.allCategoriesWrapper}>
			<h2 className={styles.allCategoriesHeader}>{t('additionalHeader')}</h2>
			<div className={styles.allCategories}>
				{Object.keys(categories).map((category) => {
					const typedCategory = category as CategoryType;
					const { img, link } = categories[typedCategory];
					return (
						<Link key={category} href={link}>
							<div className={styles.categoryWrapper}>
								<Image width={48} height={48} src={img} alt={category} />
								<h4 className={styles.categoryName}>{t(category)}</h4>
							</div>
						</Link>
					);
				})}
			</div>
		</section>
	);
}

export default Categories;
