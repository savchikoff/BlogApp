import styles from "./SmallPost.module.scss";
import Link from "next/link";

function SmallPost() {
    return (
        <Link href={"/blog"}>
            <div className={styles.postWrapper}>
                <div className={styles.postInfo}>
                    By <span className={styles.authorInfo}>John Deo </span>  l   Aug 23, 2021
                </div>
                <h4 className={styles.postHeader}>
                    8 Figma design systems that you can download for free today.
                </h4>
            </div>
        </Link>
    )
}

export default SmallPost