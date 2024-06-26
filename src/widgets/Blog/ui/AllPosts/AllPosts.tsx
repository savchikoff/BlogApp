'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import classNames from 'classnames';
import { Slide, Zoom } from 'react-awesome-reveal';

import { Pagination } from '@/shared';
import { blogPosts } from '@/shared/consts/blogPosts';
import { postsPerPage } from '@/shared/consts/pagination';
import { Post } from '@/widgets/Post';

import styles from './AllPosts.module.scss';
import container from '@/shared/styles/container.module.scss';

function AllPosts() {
	const t = useTranslations('Blog');

	const [currentPage, setCurrentPage] = useState(1);

	if (blogPosts.length === 0) {
		return (
			<div className={classNames(container.container, styles.noPosts)}>
				{t('noPosts')}
			</div>
		);
	}

	const indexOfLastPost = currentPage * postsPerPage;
	const indexOfFirstPost = indexOfLastPost - postsPerPage;
	const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost);

	const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

	return (
		<section className={styles.allPostsContainer}>
			<div className={styles.allPostsWrapper}>
				<div className={styles.allPostsHeadingWrapper}>
					<Zoom>
						<h1 className={styles.allPostsHeading}>{t('heading')}</h1>
					</Zoom>
					<Slide direction="right">
						<div className={styles.line} />
					</Slide>
				</div>
				<Slide>
					{currentPosts.map(({ id, img, category, title, text }) => (
						<Post
							dataCy={`post-${id}`}
							key={id}
							id={id}
							img={img}
							alt={title}
							category={category}
							header={title}
							description={text}
						/>
					))}
				</Slide>
				<Pagination
					postsPerPage={postsPerPage}
					totalPosts={blogPosts.length}
					paginate={paginate}
					prevPageText={t('prevPage')}
					nextPageText={t('nextPage')}
				/>
			</div>
		</section>
	);
}

export default AllPosts;
