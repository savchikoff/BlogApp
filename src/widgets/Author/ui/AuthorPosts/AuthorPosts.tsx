import styles from './AuthorPosts.module.scss';
import { blogPosts } from '@/shared/consts/blogPosts';
import { IAuthorPostsProps } from './interfaces';
import Post from '@/widgets/Post/Post';

function AuthorPosts({ authorName }: IAuthorPostsProps) {
    const authorPosts = blogPosts.filter(post => post.author === authorName);
    return (
        <div className={styles.authorPostsContainer}>
            <h2 className={styles.authorPostsHeading}>My Posts</h2>
            <div className={styles.authorPostsWrapper}>
                {authorPosts.map(({ id, img, category, title, text }) => (
                    <Post key={id} id={id} img={img} alt={title} category={category} header={title} description={text} />
                ))}
            </div>
        </div >
    )
}

export default AuthorPosts