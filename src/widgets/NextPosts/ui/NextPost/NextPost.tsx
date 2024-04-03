import Link from "next/link";
import Image from "next/image";
import styles from "./NextPost.module.scss";
import { INextPostProps } from './interfaces'

function NextPost({ id, img, author, createdAt, title, text }: INextPostProps) {
    return (
        <article className={styles.nextPostWrapper}>
            <div className={styles.nextPostImgWrapper}>
                <Image placeholder="blur" className={styles.nextPostImg} src={img} alt={title} />
            </div>
            <div className={styles.nextPostTextWrapper}>
                <span className={styles.postInfo}>
                    By <span className={styles.authorName}>{author}</span>   l  {createdAt}
                </span>
                <Link href={`/posts/${id}`}>
                    <h3 className={styles.nextPostHeading}>{title}</h3>
                </Link>
                <p className={styles.nextPostText}>{text}</p>
            </div>
        </article>
    )
}

export default NextPost