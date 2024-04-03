"use client";

import { ChangeEvent, useState } from 'react';
import { useTranslations } from 'next-intl';
import styles from './Search.module.scss';
import { blogPosts } from '@/shared/consts/blogPosts';
import SearchedPost from '../SearchedPost/SearchedPost';
import useDebounce from '@/shared/hooks/useDebounce';

function Search() {

    const t = useTranslations("Category.SearchInput");

    const [searchTerm, setSearchTerm] = useState("");
    const debounceSearchTerm = useDebounce(searchTerm, 200);

    const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    }


    const filteredPosts = blogPosts.filter((post) =>
        post.tags.some((tag) => tag.toLowerCase().includes(debounceSearchTerm.toLowerCase()))
    );

    return (
        <search className={styles.searchWrapper}>
            <input
                className={styles.searchInput}
                placeholder={`${t('placeholder')}`}
                type="text"
                onChange={handleSearchChange} />
            <button className={styles.searchButton}>{t('btnLabel')}</button>
            {debounceSearchTerm &&
                <div className={styles.searchedPostsWrapper}>
                    {filteredPosts.map(({ id, title, tags }) => (
                        <SearchedPost key={id} id={id} title={title} tags={tags} />
                    ))}
                </div>}
        </search >
    )
}

export default Search