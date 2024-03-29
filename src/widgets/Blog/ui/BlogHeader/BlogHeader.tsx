"use client"

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import styles from './BlogHeader.module.scss';
import container from '@/styles/container.module.scss';
import { Button } from '@/shared';
import { blogPosts } from '@/shared/consts/blogPosts';
import Link from 'next/link';
import { getRandomPosts } from '@/shared/utils/getRandomPosts';

function BlogHeader() {
    const t = useTranslations("FeaturedPost");
    const featuredPost = getRandomPosts(blogPosts, 1)[0];
    const { id, title, text, author, createdAt, img } = featuredPost;
    return (
        <div className={styles.blogHeaderContainer}>
            <div className={container.container}>
                <div className={styles.blogHeaderWrapper}>
                    <div className={styles.blogHeaderTextWrapper}>
                        <div className={styles.blogHeaderSubheading}>{t("subHeading")}</div>
                        <div className={styles.blogHeaderText}>
                            <h2 className={styles.blogHeaderHeading}>{title}</h2>
                            <div className={styles.authorInfo}>
                                By <span className={styles.authorName}>{author}</span> l   {createdAt}
                            </div>
                            <p className={styles.blogHeaderDescription}>
                                {text}
                            </p>
                        </div>
                        <Button isPrimary><Link href={`/posts/${id}`}>{t("link")} &gt;</Link></Button>
                    </div>
                    <div className={styles.blogHeaderImgWrapper}>
                        <Image
                            className={styles.blogHeaderImg}
                            src={img}
                            alt={title} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogHeader