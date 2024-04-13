'use client';

import { useTranslations } from 'next-intl';
import { Slide } from 'react-awesome-reveal';
import FeaturedPost from '../FeaturedPost/FeaturedPost';
import styles from './FeaturedPostSection.module.scss';
import { blogPosts } from '@/shared/consts/blogPosts';

function FeaturedPostSection() {
	const t = useTranslations('Home.PostsHome');
	const { id, author, title, img, text, createdAt } = blogPosts[1];
	return (
		<Slide>
			<section className={styles.sectionWrapper}>
				<h2 className={styles.sectionHeader}>{t('featuredHeading')}</h2>
				<FeaturedPost
					id={id}
					authorName={author}
					title={title}
					img={img}
					createdAt={createdAt}
					text={text}
				/>
			</section>
		</Slide>
	);
}

export default FeaturedPostSection;
