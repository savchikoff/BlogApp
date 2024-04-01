"use client"

import { useTranslations } from 'next-intl';
import container from '@/styles/container.module.scss';
import styles from './Author.module.scss';
import { IAuthorProps } from './interfaces'
import AuthorHeader from './AuthorHeader/AuthorHeader';
import AuthorPosts from './AuthorPosts/AuthorPosts';
import { authors } from '@/shared/consts/authors';
import classNames from 'classnames';

export function Author({ id }: IAuthorProps) {
    const t = useTranslations("AuthorPage");

    const author = authors.filter(author => author.id === id)[0];

    if (!author) {
        return (
            <div className={classNames(container.container, styles.noAuthor)}>
                {t("noAuthor", { id })}
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
    )
}
