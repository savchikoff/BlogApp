import AllTags from '../AllTags/AllTags';
import Categories from '../Categories/Categories';
import Search from '../Search/Search';
import styles from './CategorySidebar.module.scss';

function CategorySidebar() {
    return (
        <div className={styles.categorySidebarWrapper}>
            <Search />
            <AllTags />
            <Categories />
        </div>
    )
}

export default CategorySidebar