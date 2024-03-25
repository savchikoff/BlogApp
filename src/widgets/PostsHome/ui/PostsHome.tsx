import FeaturedPost from "./FeaturedPost/FeaturedPost"
import container from "@/styles/container.module.scss";
import styles from "./PostsHome.module.scss";
import FeaturedPostSection from "./FeaturedPostSection/FeaturedPostSection";
import SmallPost from "./SmallPost/SmallPost";
import AllPostsSection from "./AllPostsSection/AllPostsSection";

export function PostsHome() {
    return (
        <div className={styles.postsContainer}>
            <FeaturedPostSection />
            <AllPostsSection />
        </div>
    )
}