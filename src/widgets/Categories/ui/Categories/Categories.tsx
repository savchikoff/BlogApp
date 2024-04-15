'use client';

import { useTranslations } from 'next-intl';
import { Zoom } from 'react-awesome-reveal';

import { categories } from '@/shared/consts/categories';

import Category from '../Category/Category';

import styles from './Categories.module.scss';

export function Categories() {
	const t = useTranslations('Categories');
	return (
		<section className={styles.categoriesContainer}>
			<Zoom>
				<h2 className={styles.categoriesHeader}>{t('Header')}</h2>
			</Zoom>
			<div className={styles.categoriesWrapper}>
				<Zoom>
					{Object.entries(categories).map((item) => {
						const categoryName = item[0];
						const { img, link } = item[1];
						return (
							<Category
								dataCy={`category-${categoryName}`}
								key={link}
								category={t(categoryName)}
								img={img}
								link={link}
							/>
						);
					})}
				</Zoom>
			</div>
		</section>
	);
}
