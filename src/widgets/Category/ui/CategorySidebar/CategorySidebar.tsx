import AllTags from '../AllTags/AllTags';
import Categories from '../Categories/Categories';
import Search from '../Search/Search';
import styles from './CategorySidebar.module.scss';
import { ICategorySidebarProps } from './interfaces';

function CategorySidebar({ selectedTags, setSelectedTags }: ICategorySidebarProps) {
    return (
        <aside className={styles.categorySidebarWrapper}>
            <Search />
            <AllTags selectedTags={selectedTags} setSelectedTags={setSelectedTags} />
            <Categories />
        </aside>
    )
}

export default CategorySidebar