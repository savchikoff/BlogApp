import FeaturedPost from "../FeaturedPost/FeaturedPost";
import styles from "./FeaturedPostSection.module.scss";

function FeaturedPostSection() {
    return (
        <div className={styles.sectionWrapper}>
            <h2 className={styles.sectionHeader}>
                Featured Post
            </h2>
            <FeaturedPost />
        </div>
    )
}

export default FeaturedPostSection;