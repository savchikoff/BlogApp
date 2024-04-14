'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { Slide } from 'react-awesome-reveal';

import { blogPosts } from '@/shared/consts/blogPosts';
import { routes } from '@/shared/consts/routes';

import SmallPost from '../SmallPost/SmallPost';

import styles from './AllPostsSection.module.scss';

function AllPostsSection() {
	const t = useTranslations('Home.PostsHome');
	return (
		<Slide direction="right">
			<section className={styles.postsWrapper}>
				<div className={styles.headerWrapper}>
					<h2 className={styles.sectionHeader}>{t('allPostsHeading')}</h2>
					<Link href={routes.Blog}>
						<span className={styles.viewAllLink}>{t('link')}</span>
					</Link>
				</div>
				<div className={styles.posts}>
					<Slide direction="right">
						{blogPosts.slice(0, 4).map(({ id, author, createdAt, title }) => (
							<SmallPost
								key={id}
								id={id}
								author={author}
								createdAt={createdAt}
								title={title}
							/>
						))}
					</Slide>
				</div>
			</section>
		</Slide>
	);
}

export default AllPostsSection;
