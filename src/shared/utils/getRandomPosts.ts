import { PostType } from "../consts/blogPosts";

export const getRandomPosts = (posts: Array<PostType>, amount: number) => {
    const randomPosts: Array<PostType> = [];
    const totalPosts = posts.length;

    const amountOfPosts = Math.min(amount, totalPosts);

    while (randomPosts.length < amountOfPosts) {
        const randomIndex = Math.floor(Math.random() * totalPosts);
        const randomPost = posts[randomIndex];
        if (!randomPosts.includes(randomPost)) {
            randomPosts.push(randomPost);
        }
    }

    return randomPosts;
}