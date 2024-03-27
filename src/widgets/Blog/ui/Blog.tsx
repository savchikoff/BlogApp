import styles from "./Blog.module.scss";
import BlogHeader from "./BlogHeader/BlogHeader";
import AllPosts from "./AllPosts/AllPosts";

export function Blog() {
    return (
        <>
            <BlogHeader />
            <AllPosts />
        </>
    )
}