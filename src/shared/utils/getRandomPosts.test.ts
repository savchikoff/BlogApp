import { getRandomPosts } from "./getRandomPosts";
import { blogPosts } from "../consts/blogPosts";

describe('getRandomPosts', () => {
    it("should return an array of 3 random posts", () => {
        const randomPosts = getRandomPosts(blogPosts, 3);
        expect(randomPosts.length).toBe(3);
        randomPosts.forEach(post => {
            expect(blogPosts).toContainEqual(post);
        });
    });
});