import Link from 'next/link';
import styles from './AllPostsSection.module.scss';
import SmallPost from '../SmallPost/SmallPost';

function AllPostsSection() {
    return (
        <div className={styles.postsWrapper}>
            <div className={styles.headerWrapper}>
                <h2 className={styles.sectionHeader}>All Posts</h2>
                <Link href="/blog">
                    <span className={styles.viewAllLink}>
                        View All
                    </span>
                </Link>
            </div>
            <div className={styles.posts}>
                <SmallPost />
                <SmallPost />
                <SmallPost />
                <SmallPost />
            </div>
        </div>
    )
}

export default AllPostsSection