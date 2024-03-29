"use client"

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Categories.module.scss';
import { categories } from '@/shared/consts/categories';
import { CategoryType } from '@/shared/consts/categories';



function Categories() {
    const t = useTranslations("Categories");
    return (
        <div className={styles.allCategoriesWrapper}>
            <h2 className={styles.allCategoriesHeader}>Categories</h2>
            <div className={styles.allCategories}>
                {Object.keys(categories).map((category => {
                    const typedCategory = category as CategoryType;
                    const { img, link } = categories[typedCategory];
                    return (
                        <Link key={category} href={link}>
                            <div className={styles.categoryWrapper}>
                                <Image src={img} alt={category} />
                                <h4 className={styles.categoryName}>{t(category)}</h4>
                            </div>
                        </Link>
                    )
                }))}
            </div>
        </div>
    )
}

export default Categories