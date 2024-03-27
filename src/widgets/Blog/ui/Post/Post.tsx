import Link from 'next/link';
import Image from 'next/image';
import styles from './Post.module.scss';
import { IPostProps } from './interfaces';

function Post({ img, alt, category, header, description }: IPostProps) {
    return (
        <div className={styles.postWrapper}>
            <Image src={img} alt={alt} />
            <div className={styles.postTextWrapper}>
                <Link href={`/category/${category.toLowerCase()}`} className={styles.postCategory}>{category}</Link>
                <h2 className={styles.postHeading}>{header}</h2>
                <p className={styles.postDescription}>{description}</p>
            </div>
        </div >
    )
}

export default Post