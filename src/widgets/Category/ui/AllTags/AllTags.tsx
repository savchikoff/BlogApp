import styles from './AllTags.module.scss';
import { tags } from '@/shared/consts/tags';

function AllTags() {
    return (
        <div className={styles.allTagsWrapper}>
            <h2 className={styles.allTagsHeader}>All Tags</h2>
            <div className={styles.allTags}>
                <ul className={styles.categoriesWrapper}>
                    {tags.map(tag => (
                        <li key={tag} className={styles.categoryButton}>
                            {tag}
                        </li>
                    ))}
                    <li key="clearAll" className={styles.categoryButton}>
                        Clear All
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default AllTags