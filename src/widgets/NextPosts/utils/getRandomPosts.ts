import { PostType } from "@/shared/consts/blogPosts";

export const getRandomPosts = (blogPosts: PostType[], postId: number) => {

    if (!blogPosts.length) {
        return [];
    }

    const index = blogPosts.findIndex(post => post.id === postId);

    if (index < 0) {
        return [];
    }

    const posts = [];
    for (let i = 1; i <= 3; i++) {
        const nextPost = blogPosts[(index + i) % blogPosts.length];
        if (nextPost) {
            posts.push(nextPost);
        } else {
            posts.push(blogPosts[i - (blogPosts.length - index)]);
        }
    }
    return posts;
};