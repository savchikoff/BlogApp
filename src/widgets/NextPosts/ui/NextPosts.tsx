"use client"

import { useTranslations } from "next-intl";
import { blogPosts } from "@/shared/consts/blogPosts";
import { getRandomPosts } from "@/shared/utils/getRandomPosts";
import styles from './NextPosts.module.scss';
import NextPost from "./NextPost/NextPost";

function NextPosts() {
    const t = useTranslations("BlogPost.NextPosts")
    const posts = getRandomPosts(blogPosts, 3);
    return (
        <section className={styles.nextPostsWrapper}>
            <h2 className={styles.nextPostsHeading}>
                {t("heading")}
            </h2>
            <div className={styles.nextPosts}>
                {posts.map(({ id, img, author, createdAt, title, text }) => (
                    <NextPost key={id} id={id} img={img} title={title} text={text} author={author} createdAt={createdAt} />
                ))}
            </div>
            <div className={styles.line}></div>
        </section>
    )
}

export default NextPosts