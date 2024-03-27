"use client"

import { useState } from 'react';
import styles from './Pagination.module.scss';
import { IPaginationProps } from './interfaces';

export function Pagination({ postsPerPage, totalPosts, paginate }: IPaginationProps) {
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
                        &lt; Prev
                    </a>
                </li>
                {
                    pageNumbers.map(number => (
                        <li
                            className={styles.page + " " +
                                (number == activePage ? styles.activeLink : '')}

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
                >
                    <a
                        className={styles.pageLink}
                    >
                        Next &gt;
                    </a>
                </li>
            </ul>
        </nav >
    )
}