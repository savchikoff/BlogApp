import Image from 'next/image';
import styles from './BlogHeader.module.scss';
import container from '@/styles/container.module.scss';
import blogBg from "@/widgets/Blog/assets/blogBg.jpg";
import { Button } from '@/shared';

function BlogHeader() {
    return (
        <div className={styles.blogHeaderContainer}>
            <div className={container.container}>
                <div className={styles.blogHeaderWrapper}>
                    <div className={styles.blogHeaderTextWrapper}>
                        <div className={styles.blogHeaderSubheading}>Featured Post</div>
                        <div className={styles.blogHeaderText}>
                            <h2 className={styles.blogHeaderHeading}>Step-by-step guide to choosing great font pairs</h2>
                            <div className={styles.authorInfo}>
                                By <span className={styles.authorName}>John Doe</span> l   May 23, 2022
                            </div>
                            <p className={styles.blogHeaderDescription}>
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
                            </p>
                        </div>
                        <Button isPrimary>Read More &gt;</Button>
                    </div>
                    <Image
                        src={blogBg}
                        alt="blogBg" />
                </div>
            </div>
        </div>
    )
}

export default BlogHeader