import styles from './Category.module.scss';
import container from '@/styles/container.module.scss';
import CategoryHeader from './CategoryHeader/CategoryHeader';
import Search from './Search/Search';
import AllTags from './AllTags/AllTags';
import { ICategoryProps } from './interfaces';
import CategorySidebar from './CategorySidebar/CategorySidebar';
import Post from '@/widgets/Post/Post';
import { blogPosts } from '@/shared/consts/blogPosts';

export function Category({ categoryName }: ICategoryProps) {
    const categoryPosts = blogPosts.filter(post => post.category.toLowerCase() === categoryName);
    return (
        <div className={styles.categoryContainer}>
            <CategoryHeader categoryName={categoryName} />
            <div className={container.container}>
                <div className={styles.categoryContentWrapper}>
                    <div className={styles.categoryPostsWrapper}>
                        {categoryPosts.map(({ id, img, category, title, text }) => (
                            <Post key={id} id={id} img={img} alt={title} category={category} header={title} description={text} />
                        ))}
                    </div>
                    <CategorySidebar />
                </div>
            </div>
        </div>
    )
}