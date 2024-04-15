'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { authors } from '@/shared/consts/authors';
import { blogPosts } from '@/shared/consts/blogPosts';

import { IBlogPostProps } from './BlogPost.interfaces';

import styles from './BlogPost.module.scss';

export function BlogPost({ postId }: IBlogPostProps) {
	const t = useTranslations('Categories');
	const post = blogPosts.filter((post) => post.id === postId)[0];
	const {
		img,
		category,
		title,
		createdAt,
		author,
		rocketIcon,
		postContent: { bulletPoints, text: postText, title: postTitle },
	} = post;
	const authorObj = authors.filter(({ name }) => name === author)[0];
	const { img: authorImg } = authorObj;
	return (
		<article className={styles.blogPostContainer}>
			<div className={styles.blogPostWrapper}>
				<div className={styles.blogPostHeaderWrapper}>
					<div className={styles.authorInfoWrapper}>
						<Image
							placeholder="blur"
							width={48}
							height={48}
							src={authorImg}
							alt={author}
						/>
						<div className={styles.authorInfo}>
							<p className={styles.authorName}>{author}</p>
							<span className={styles.postDate}>Posted on {createdAt}</span>
						</div>
					</div>
					<h1 className={styles.blogPostHeading}>{title}</h1>
					<div className={styles.blogPostCategoryWrapper}>
						<Image src={rocketIcon} alt="rocketIcon" />
						<p className={styles.categoryName}>{t(category)}</p>
					</div>
				</div>
				<div className={styles.blogPostImgWrapper}>
					<Image
						placeholder="blur"
						className={styles.blogPostImg}
						src={img}
						alt={title}
					/>
				</div>
				<div className={styles.blogPostTextContentWrapper}>
					<div className={styles.blogPostTextPart}>
						<h2 className={styles.blogPostTextPartHeading}>{postTitle}</h2>
						<div className={styles.blogPostTextPartTextWrapper}>
							<p className={styles.blogPostTextPartText}>{postText}</p>
						</div>
					</div>
					<div className={styles.blogPostTextPart}>
						<h2 className={styles.blogPostTextPartHeading}>{postTitle}</h2>
						<div className={styles.blogPostTextPartTextWrapper}>
							<p className={styles.blogPostTextPartText}>{postText}</p>
							<ul className={styles.bulletPointsWrapper}>
								{bulletPoints.map(({ id, content }) => (
									<li key={id} className={styles.bulletPoint}>
										{content}
									</li>
								))}
							</ul>
							<p className={styles.blogPostTextPartText}>{postText}</p>
							<p className={styles.blogPostTextPartText}>{postText}</p>
						</div>
					</div>
					<div className={styles.blogPostTextPart}>
						<h2 className={styles.blogPostTextPartHeading}>{postTitle}</h2>
						<div className={styles.blogPostTextPartTextWrapper}>
							<p className={styles.blogPostTextPartText}>{postText}</p>
						</div>
					</div>
				</div>
			</div>
		</article>
	);
}
