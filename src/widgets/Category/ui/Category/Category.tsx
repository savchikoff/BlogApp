'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import classNames from 'classnames';

import { blogPosts } from '@/shared/consts/blogPosts';
import { categories } from '@/shared/consts/categories';
import { Post } from '@/widgets/Post';

import CategoryHeader from '../CategoryHeader/CategoryHeader';
import CategorySidebar from '../CategorySidebar/CategorySidebar';

import { ICategoryProps } from './Category.interfaces';

import styles from './Category.module.scss';
import container from '@/shared/styles/container.module.scss';

export function Category({ categoryName }: ICategoryProps) {
	const t = useTranslations('Category.Posts');
	const tNoCategory = useTranslations('Category.NoCategory');
	const categoriesTypes = Object.keys(categories).map((item) =>
		item.toLowerCase()
	);

	const [selectedTags, setSelectedTags] = useState<Array<string>>([]);

	if (!categoriesTypes.includes(categoryName)) {
		return (
			<div
				data-cy="no-category"
				className={classNames(container.container, styles.noCategory)}
			>
				{tNoCategory('label')}
			</div>
		);
	}

	const categoryPosts = blogPosts.filter(
		(post) => post.category.toLowerCase() === categoryName
	);

	const posts =
		selectedTags.length === 0
			? categoryPosts
			: categoryPosts.filter((post) =>
				selectedTags.some((selectedTag) => post.tags.includes(selectedTag))
			);

	return (
		<section className={styles.categoryContainer}>
			<CategoryHeader categoryName={categoryName} />
			<div className={container.container}>
				<div className={styles.categoryContentWrapper}>
					<div className={styles.categoryPostsWrapper}>
						{posts.length > 0 ? (
							posts.map(({ id, img, category, title, text }) => (
								<Post
									key={id}
									id={id}
									img={img}
									alt={title}
									category={category}
									header={title}
									description={text}
								/>
							))
						) : (
							<div data-cy="no-posts-tags" className={styles.noPostsLabel}>
								{t('noPosts')}
							</div>
						)}
					</div>
					<CategorySidebar
						selectedTags={selectedTags}
						setSelectedTags={setSelectedTags}
					/>
				</div>
			</div>
		</section>
	);
}
