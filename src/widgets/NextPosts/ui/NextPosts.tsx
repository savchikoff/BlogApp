'use client';

import { useTranslations } from 'next-intl';
import { blogPosts } from '@/shared/consts/blogPosts';
import { getRandomPosts } from '../utils/getRandomPosts';
import styles from './NextPosts.module.scss';
import NextPost from './NextPost/NextPost';
import { INextPostsProps } from './NextPosts.interfaces';

function NextPosts({ postId }: INextPostsProps) {
	const t = useTranslations('BlogPost.NextPosts');
	const posts = getRandomPosts(blogPosts, postId);
	return (
		<section className={styles.nextPostsWrapper}>
			<h2 className={styles.nextPostsHeading}>{t('heading')}</h2>
			<div className={styles.nextPosts}>
				{posts.map(({ id, img, author, createdAt, title, text }) => (
					<NextPost
						key={id}
						id={id}
						img={img}
						title={title}
						text={text}
						author={author}
						createdAt={createdAt}
					/>
				))}
			</div>
			<div className={styles.line} />
		</section>
	);
}

export default NextPosts;
