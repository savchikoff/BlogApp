'use client';

import { useTranslations } from 'next-intl';
import classNames from 'classnames';

import { authors } from '@/shared/consts/authors';

import AuthorHeader from '../AuthorHeader/AuthorHeader';
import AuthorPosts from '../AuthorPosts/AuthorPosts';

import { IAuthorProps } from './Author.interfaces';

import styles from './Author.module.scss';
import container from '@/shared/styles/container.module.scss';

export function Author({ id }: IAuthorProps) {
	const t = useTranslations('AuthorPage');

	const author = authors.filter((author) => author.id === id)[0];

	if (!author) {
		return (
			<div className={classNames(container.container, styles.noAuthor)}>
				{t('noAuthor', { id })}
			</div>
		);
	}

	const { name, img } = author;

	return (
		<>
			<AuthorHeader name={name} img={img} />
			<div className={container.container}>
				<AuthorPosts authorName={name} />
			</div>
		</>
	);
}
