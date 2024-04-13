'use client';

import { useState } from 'react';
import classNames from 'classnames';
import styles from './Pagination.module.scss';
import { IPaginationProps } from './Pagination.interfaces';

export function Pagination({
	postsPerPage,
	totalPosts,
	paginate,
	prevPageText,
	nextPageText,
}: IPaginationProps) {
	const [activePage, setActivePage] = useState(1);

	const pageNumbers = [];

	for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
		pageNumbers.push(i);
	}

	const handlePageClick = (page: number) => () => {
		if (page < 1 || page > pageNumbers.length) return;
		setActivePage(page);
		paginate(page);
	};

	return (
		<nav>
			<ul className={styles.paginationWrapper}>
				<li
					key="previous"
					onClick={handlePageClick(activePage - 1)}
					className={styles.pageControl}
				>
					&lt; {prevPageText}
				</li>
				{pageNumbers.map((number) => (
					<li
						className={classNames(styles.page, {
							[styles.activeLink]: number === activePage,
						})}
						data-cy={`page-${2}`}
						key={number}
						onClick={handlePageClick(number)}
					>
						{number}
					</li>
				))}
				<li
					key="next"
					onClick={handlePageClick(activePage + 1)}
					className={styles.pageControl}
					data-cy="next-page"
				>
					{nextPageText} &gt;
				</li>
			</ul>
		</nav>
	);
}
