"use client"

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import styles from './AllPostsSection.module.scss';
import SmallPost from '../SmallPost/SmallPost';
import { blogPosts } from '@/shared/consts/blogPosts';
import { routes } from '@/shared/consts/routes';


function AllPostsSection() {
    const t = useTranslations("Home.PostsHome")
    return (
        <div className={styles.postsWrapper}>
            <div className={styles.headerWrapper}>
                <h2 className={styles.sectionHeader}>{t("allPostsHeading")}</h2>
                <Link href={routes.Blog}>
                    <span className={styles.viewAllLink}>
                        {t("link")}
                    </span>
                </Link>
            </div>
            <div className={styles.posts}>
                {blogPosts.slice(0, 4).map(({ id, author, createdAt, title }) => (
                    <SmallPost key={id} id={id} author={author} createdAt={createdAt} title={title} />
                ))}
            </div>
        </div>
    )
}

export default AllPostsSection