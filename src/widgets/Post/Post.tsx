import Link from 'next/link';
import Image from 'next/image';
import styles from './Post.module.scss';
import { IPostProps } from './interfaces';

function Post({ id, img, alt, category, header, description }: IPostProps) {
    return (
        <div className={styles.postWrapper}>
            <div className={styles.imgWrapper}>
                <Image className={styles.postImg} src={img} alt={alt} />
            </div>
            <div className={styles.postTextWrapper}>
                <Link href={`/category/${category.toLowerCase()}`} className={styles.postCategory}>{category}</Link>
                <Link href={`/posts/${id}`}><h2 className={styles.postHeading}>{header}</h2></Link>
                <p className={styles.postDescription}>{description}</p>
            </div>
        </div >
    )
}

export default Post