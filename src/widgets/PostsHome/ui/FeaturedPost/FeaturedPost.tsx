import Image from "next/image";
import postImg from "@/widgets/PostsHome/assets/postImg.jpg"

import styles from "./FeaturedPost.module.scss";
import { Button } from "@/shared";

function FeaturedPost() {
    return (
        <div className={styles.postContainer}>
            <div className={styles.postWrapper}>
                <Image src={postImg} alt="post-img" />
                <div className={styles.articleTextWrapper}>
                    <div className={styles.articleInfo}>
                        By <span className={styles.authorInfo}>John Doe</span> l   May 23, 2022
                    </div>
                    <h3 className={styles.articleHeader}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
                    </h3>
                    <p className={styles.articleDescription}>
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
                    </p>
                </div>
                <Button isPrimary>Read More &gt;</Button>
            </div>
        </div>
    )
}

export default FeaturedPost