import Link from 'next/link';

import { additionalRoutes } from '@/shared/consts/routes';

import { ISmallPostProps } from './SmallPost.interfaces';

import styles from './SmallPost.module.scss';

function SmallPost({ id, author, createdAt, title }: ISmallPostProps) {
	return (
		<article className={styles.postWrapper}>
			<span className={styles.postInfo}>
				By <span className={styles.authorInfo}>{author}</span> l {createdAt}
			</span>
			<Link href={`${additionalRoutes.Posts}/${id}`}>
				<h4 className={styles.postHeader}>{title}</h4>
			</Link>
		</article>
	);
}

export default SmallPost;
