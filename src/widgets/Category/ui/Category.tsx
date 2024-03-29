"use client";

import { useState } from 'react';
import styles from './Category.module.scss';
import container from '@/styles/container.module.scss';
import CategoryHeader from './CategoryHeader/CategoryHeader';
import Search from './Search/Search';
import AllTags from './AllTags/AllTags';
import { ICategoryProps } from './interfaces';
import CategorySidebar from './CategorySidebar/CategorySidebar';
import Post from '@/widgets/Post/Post';
import { blogPosts } from '@/shared/consts/blogPosts';


export function Category({ categoryName }: ICategoryProps) {
    const [selectedTags, setSelectedTags] = useState<Array<string>>([]);

    const categoryPosts = blogPosts.filter(post => post.category.toLowerCase() === categoryName);

    const posts = selectedTags.length === 0
        ? categoryPosts
        : categoryPosts
            .filter(post => selectedTags.some(selectedTag => post.tags.includes(selectedTag)));
    return (
        <div className={styles.categoryContainer}>
            <CategoryHeader categoryName={categoryName} />
            <div className={container.container}>
                <div className={styles.categoryContentWrapper}>
                    <div className={styles.categoryPostsWrapper}>
                        {posts.map(({ id, img, category, title, text }) => (
                            <Post key={id} id={id} img={img} alt={title} category={category} header={title} description={text} />
                        ))}
                    </div>
                    <CategorySidebar selectedTags={selectedTags} setSelectedTags={setSelectedTags} />
                </div>
            </div>
        </div>
    )
}