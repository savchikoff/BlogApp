"use client"

import { useTranslations } from "next-intl";
import FeaturedPost from "../FeaturedPost/FeaturedPost";
import styles from "./FeaturedPostSection.module.scss";
import { blogPosts } from "@/shared/consts/blogPosts";
import { getRandomPosts } from "@/shared/utils/getRandomPosts";

function FeaturedPostSection() {
    const t = useTranslations("Home.PostsHome");
    const post = getRandomPosts(blogPosts, 1)[0];
    const { id, author, title, img, text, createdAt } = post;
    return (
        <div className={styles.sectionWrapper}>
            <h2 className={styles.sectionHeader}>
                {t("featuredHeading")}
            </h2>
            <FeaturedPost id={id} authorName={author} title={title} img={img} createdAt={createdAt} text={text} />
        </div>
    )
}

export default FeaturedPostSection;