'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { additionalRoutes } from '@/shared/consts/routes';

import { IPostProps } from './Post.interfaces';

import styles from './Post.module.scss';

export function Post({
	id,
	img,
	alt,
	category,
	header,
	description,
	dataCy,
}: IPostProps) {
	const t = useTranslations('Categories');
	return (
		<article className={styles.postWrapper}>
			<div className={styles.imgWrapper}>
				<Image
					placeholder="blur"
					className={styles.postImg}
					src={img}
					alt={alt}
				/>
			</div>
			<div className={styles.postTextWrapper}>
				<Link
					href={`${additionalRoutes.Category}/${category.toLowerCase()}`}
					className={styles.postCategory}
				>
					{t(category)}
				</Link>
				<Link data-cy={dataCy} href={`${additionalRoutes.Posts}/${id}`}>
					<h2 className={styles.postHeading}>{header}</h2>
				</Link>
				<p className={styles.postDescription}>{description}</p>
			</div>
		</article>
	);
}
