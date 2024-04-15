import AllPostsSection from '../AllPostsSection/AllPostsSection';
import FeaturedPostSection from '../FeaturedPostSection/FeaturedPostSection';

import styles from './PostsHome.module.scss';

export function PostsHome() {
	return (
		<div className={styles.postsContainer}>
			<FeaturedPostSection />
			<AllPostsSection />
		</div>
	);
}
