"use client"

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Post.module.scss';
import { IPostProps } from './interfaces';

function Post({ id, img, alt, category, header, description, dataCy }: IPostProps) {
    const t = useTranslations("Categories");
    return (
        <article className={styles.postWrapper}>
            <div className={styles.imgWrapper}>
                <Image className={styles.postImg} src={img} alt={alt} />
            </div>
            <div className={styles.postTextWrapper}>
                <Link href={`/category/${category.toLowerCase()}`} className={styles.postCategory}>{t(category)}</Link>
                <Link data-cy={dataCy} href={`/posts/${id}`}><h2 className={styles.postHeading}>{header}</h2></Link>
                <p className={styles.postDescription}>{description}</p>
            </div>
        </article >
    )
}

export default Post