"use client";

import { useState } from 'react';
import Post from '../Post/Post';
import styles from './AllPosts.module.scss';
import postImg from '../../assets/postImg.jpg';
import { Pagination } from '@/shared';


const posts = [
    {
        img: postImg,
        alt: 'postImg',
        category: "Business",
        header: "Design tips for designers that cover everything you need",
        description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident."
    },
    {
        img: postImg,
        alt: 'postImg',
        category: "Business",
        header: "Design tips for designers that cover everything you need",
        description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident."
    },
    {
        img: postImg,
        alt: 'postImg',
        category: "Business",
        header: "Design tips for designers that cover everything you need",
        description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident."
    },
    {
        img: postImg,
        alt: 'postImg',
        category: "Business",
        header: "Design tips for designers that cover everything you need",
        description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident."
    },
    {
        img: postImg,
        alt: 'postImg',
        category: "Business",
        header: "Design tips for designers that cover everything you need",
        description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident."
    },
    {
        img: postImg,
        alt: 'postImg',
        category: "Business",
        header: "Design tips for designers that cover everything you need",
        description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident."
    },
]

function AllPosts() {

    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 5;

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

    return (
        <div className={styles.allPostsContainer}>
            <div className={styles.allPostsWrapper}>
                <div className={styles.allPostsHeadingWrapper}>
                    <h1 className={styles.allPostsHeading}>All Posts</h1>
                    <div className={styles.line}></div>
                </div>
                {currentPosts.map(({ img, alt, category, header, description }) => (
                    <Post img={img} alt={alt} category={category} header={header} description={description} />
                ))}
                <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate} />
            </div>
        </div>
    )
}

export default AllPosts