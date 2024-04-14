'use client';

import { useTranslations } from 'next-intl';

import { blogPosts } from '@/shared/consts/blogPosts';
import { Post } from '@/widgets/Post';

import { IAuthorPostsProps } from './AuthorPosts.interfaces';

import styles from './AuthorPosts.module.scss';

function AuthorPosts({ authorName }: IAuthorPostsProps) {
	const t = useTranslations('AuthorPage');
	const authorPosts = blogPosts.filter((post) => post.author === authorName);
	return (
		<section className={styles.authorPostsContainer}>
			<h2 className={styles.authorPostsHeading}>{t('postsHeading')}</h2>
			<div className={styles.authorPostsWrapper}>
				{authorPosts.map(({ id, img, category, title, text }) => (
					<Post
						key={id}
						id={id}
						img={img}
						alt={title}
						category={category}
						header={title}
						description={text}
					/>
				))}
			</div>
		</section>
	);
}

export default AuthorPosts;
