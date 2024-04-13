import Image from 'next/image';
import Link from 'next/link';
import styles from './FeaturedPost.module.scss';
import { additionalRoutes } from '@/shared/consts/routes';
import { Button } from '@/shared';
import { IFeaturedPostProps } from './interfaces';

function FeaturedPost({
	id,
	authorName,
	createdAt,
	title,
	text,
	img,
}: IFeaturedPostProps) {
	return (
		<article className={styles.postContainer}>
			<div className={styles.postWrapper}>
				<div className={styles.postImgWrapper}>
					<Image
						placeholder="blur"
						className={styles.postImg}
						src={img}
						alt="post-img"
					/>
				</div>
				<div className={styles.articleTextWrapper}>
					<span className={styles.articleInfo}>
						By <span className={styles.authorInfo}> {authorName}</span> l{' '}
						{createdAt}
					</span>
					<h3 className={styles.articleHeader}>{title}</h3>
					<p className={styles.articleDescription}>{text}</p>
				</div>
				<Button isPrimary>
					<Link href={`${additionalRoutes.Posts}/${id}`}>Read More &gt;</Link>
				</Button>
			</div>
		</article>
	);
}

export default FeaturedPost;
