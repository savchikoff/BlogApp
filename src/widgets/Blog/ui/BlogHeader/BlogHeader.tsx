'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { Zoom } from 'react-awesome-reveal';
import Image from 'next/image';
import styles from './BlogHeader.module.scss';
import container from '@/shared/styles/container.module.scss';
import { Button } from '@/shared';
import { blogPosts } from '@/shared/consts/blogPosts';

function BlogHeader() {
	const t = useTranslations('FeaturedPost');
	const { id, title, text, author, createdAt, img } = blogPosts[0];
	return (
		<section className={styles.blogHeaderContainer}>
			<div className={container.container}>
				<Zoom>
					<div className={styles.blogHeaderWrapper}>
						<div className={styles.blogHeaderTextWrapper}>
							<div className={styles.blogHeaderSubheading}>
								{t('subHeading')}
							</div>
							<div className={styles.blogHeaderText}>
								<h2 className={styles.blogHeaderHeading}>{title}</h2>
								<div className={styles.authorInfo}>
									By <span className={styles.authorName}>{author}</span> l{' '}
									{createdAt}
								</div>
								<p className={styles.blogHeaderDescription}>{text}</p>
							</div>
							<Button isPrimary>
								<Link href={`/posts/${id}`}>{t('link')} &gt;</Link>
							</Button>
						</div>
						<div className={styles.blogHeaderImgWrapper}>
							<Image
								placeholder="blur"
								className={styles.blogHeaderImg}
								src={img}
								alt={title}
							/>
						</div>
					</div>
				</Zoom>
			</div>
		</section>
	);
}

export default BlogHeader;
