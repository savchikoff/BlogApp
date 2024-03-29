"use client";

import { ChangeEvent, useState } from 'react';
import styles from './Search.module.scss';
import { blogPosts } from '@/shared/consts/blogPosts';
import SearchedPost from '../SearchedPost/SearchedPost';
import useDebounce from '@/shared/hooks/useDebounce';

function Search() {

    const [searchTerm, setSearchTerm] = useState("");
    const debounceSearchTerm = useDebounce(searchTerm, 200);

    const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    }


    const filteredPosts = blogPosts.filter((post) =>
        post.tags.some((tag) => tag.toLowerCase().includes(debounceSearchTerm.toLowerCase()))
    );

    return (
        <>
            <div className={styles.searchWrapper}>
                <input
                    className={styles.searchInput}
                    placeholder='Search for tag...'
                    type="text"
                    onChange={handleSearchChange} />
                <button className={styles.searchButton}> Search</button>
                {debounceSearchTerm &&
                    <div className={styles.searchedPostsWrapper}>
                        {filteredPosts.map(({ id, title, tags }) => (
                            <SearchedPost id={id} title={title} tags={tags} />
                        ))}
                    </div>}
            </div >
        </>
    )
}

export default Search