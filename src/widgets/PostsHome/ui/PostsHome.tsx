import styles from './PostsHome.module.scss';
import FeaturedPostSection from './FeaturedPostSection/FeaturedPostSection';
import AllPostsSection from './AllPostsSection/AllPostsSection';

export function PostsHome() {
	return (
		<div className={styles.postsContainer}>
			<FeaturedPostSection />
			<AllPostsSection />
		</div>
	);
}
