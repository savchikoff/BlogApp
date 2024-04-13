import Link from 'next/link';
import Image from 'next/image';
import { additionalRoutes } from '@/shared/consts/routes';
import styles from './NextPost.module.scss';
import { INextPostProps } from './interfaces';

function NextPost({ id, img, author, createdAt, title, text }: INextPostProps) {
	return (
		<article className={styles.nextPostWrapper}>
			<div className={styles.nextPostImgWrapper}>
				<Image
					placeholder="blur"
					className={styles.nextPostImg}
					src={img}
					alt={title}
				/>
			</div>
			<div className={styles.nextPostTextWrapper}>
				<span className={styles.postInfo}>
					By <span className={styles.authorName}>{author}</span> l {createdAt}
				</span>
				<Link href={`${additionalRoutes.Posts}/${id}`}>
					<h2 className={styles.nextPostHeading}>{title}</h2>
				</Link>
				<p className={styles.nextPostText}>{text}</p>
			</div>
		</article>
	);
}

export default NextPost;
