"use client"

import { useTranslations } from "next-intl";
import styles from "./Hero.module.scss";
import container from "@/styles/container.module.scss";
import Link from "next/link";
import { Button } from "@/shared";
import { blogPosts } from "@/shared/consts/blogPosts";
import { getRandomPosts } from "@/shared/utils/getRandomPosts";

export function Hero() {
    const t = useTranslations("FeaturedPost");

    const featuredPost = getRandomPosts(blogPosts, 1)[0];
    const { category, title, author, createdAt, text, id } = featuredPost;
    console.log(featuredPost);
    return (
        <div className={styles.headerContainer}>
            <div className={container.container}>
                <div className={styles.contentWrapper}>
                    <div className={styles.infoWrapper}>
                        <p className={styles.subHeader}>
                            Posted on <strong>{category}</strong>
                        </p>
                        <h1 className={styles.mainHeader}>
                            {title}
                        </h1>
                        <div className={styles.articleInfo}>
                            By <span className={styles.authorInfo}>{author}</span>  |  {createdAt}
                        </div>
                        <p className={styles.description}>
                            {text}
                        </p>
                    </div>
                    <Button isPrimary><Link href={`/posts/${id}`}>{t("link")} &gt;</Link></Button>
                </div>
            </div>
        </div>
    )
}