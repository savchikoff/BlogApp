import Link from 'next/link';
import styles from './SearchedPost.module.scss';
import { ISearchedPostProps } from './interface';

function SearchedPost({ id, title, tags }: ISearchedPostProps) {
    return (
        <Link href={`/posts/${id}`}>
            <article className={styles.searchedPostContainer}>
                <h6 className={styles.searchedPostTitle}>{title}</h6>
                <p className={styles.searchedPostTags}>{tags.join(", ")}</p>
            </article>
        </Link>
    )
}

export default SearchedPost;