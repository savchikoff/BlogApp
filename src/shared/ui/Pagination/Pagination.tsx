"use client"

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import styles from './Pagination.module.scss';
import { IPaginationProps } from './interfaces';

export function Pagination({ postsPerPage, totalPosts, paginate }: IPaginationProps) {
    const t = useTranslations("Blog");

    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    const [activePage, setActivePage] = useState(1);

    const handlePageClick = (page: number) => () => {
        if (page < 1 || page > pageNumbers.length) return;
        setActivePage(page);
        paginate(page);
    }

    return (
        <nav>
            <ul className={styles.paginationWrapper}>
                <li
                    key={"previous"}
                    onClick={handlePageClick(activePage - 1)}
                    className={styles.pageControl}
                >
                    <a
                        className={styles.pageLink}
                    >
                        &lt; {t("prevPage")}
                    </a>
                </li>
                {
                    pageNumbers.map(number => (
                        <li
                            className={styles.page + " " +
                                (number == activePage ? styles.activeLink : '')}
                            data-cy={`page-${2}`}
                            key={number}
                            onClick={handlePageClick(number)}
                        >
                            <a
                            >
                                {number}
                            </a>
                        </li>
                    ))
                }
                <li
                    key={"next"}
                    onClick={handlePageClick(activePage + 1)}
                    className={styles.pageControl}
                    data-cy="next-page"
                >
                    <a
                        className={styles.pageLink}
                    >
                        {t("nextPage")} &gt;
                    </a>
                </li>
            </ul>
        </nav >
    )
}