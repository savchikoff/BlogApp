import styles from "./SmallPost.module.scss";
import Link from "next/link";
import { routes } from "@/shared/consts/routes";
import { ISmallPostProps } from "./interfaces";

function SmallPost({ id, author, createdAt, title }: ISmallPostProps) {
    return (
        <article className={styles.postWrapper}>
            <span className={styles.postInfo}>
                By <span className={styles.authorInfo}>{author}</span>  l   {createdAt}
            </span>
            <Link href={`/posts/${id}`}>
                <h4 className={styles.postHeader}>
                    {title}
                </h4>
            </Link>
        </article>
    )
}

export default SmallPost