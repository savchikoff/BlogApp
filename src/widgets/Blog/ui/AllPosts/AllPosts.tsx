"use client";

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import Post from '../../../Post/Post';
import styles from './AllPosts.module.scss';
import { Pagination } from '@/shared';
import { blogPosts } from '@/shared/consts/blogPosts';

function AllPosts() {

    const t = useTranslations("Blog");

    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 5;

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

    return (
        <div className={styles.allPostsContainer}>
            <div className={styles.allPostsWrapper}>
                <div className={styles.allPostsHeadingWrapper}>
                    <h1 className={styles.allPostsHeading}>{t("heading")}</h1>
                    <div className={styles.line}></div>
                </div>
                {currentPosts.map(({ id, img, category, title, text }) => (
                    <Post key={id} id={id} img={img} alt={title} category={category} header={title} description={text} />
                ))}
                <Pagination postsPerPage={postsPerPage} totalPosts={blogPosts.length} paginate={paginate} />
            </div>
        </div>
    )
}

export default AllPosts