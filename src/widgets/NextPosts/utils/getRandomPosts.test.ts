/* eslint-disable simple-import-sort/imports */
import { expect } from '@jest/globals';
import { blogPosts } from '@/shared/consts/blogPosts';

import { getRandomPosts } from './getRandomPosts';

describe('getRandomPosts function', () => {
	it('should return 3 posts after the specified postId', () => {
		const postId = 2;
		const result = getRandomPosts(blogPosts, postId);
		expect(result.length).toBe(3);
		expect(result.map((post) => post.id)).toEqual([3, 4, 5]);
	});

	it('should return posts from the beginning if not enough posts after the specified postId', () => {
		const postId = 6;
		const result = getRandomPosts(blogPosts, postId);
		expect(result.length).toBe(3);
		expect(result.map((post) => post.id)).toEqual([7, 1, 2]);
	});

	it('should handle edge cases when postId is at the end of the array', () => {
		const postId = 7;
		const result = getRandomPosts(blogPosts, postId);
		expect(result.length).toBe(3);
		expect(result.map((post) => post.id)).toEqual([1, 2, 3]);
	});

	it('should return an empty array if blogPosts array is empty', () => {
		const postId = 1;
		const result = getRandomPosts([], postId);
		expect(result.length).toBe(0);
	});

	it('should return an empty array if postId is not found in blogPosts array', () => {
		const postId = 8;
		const result = getRandomPosts(blogPosts, postId);
		expect(result.length).toBe(0);
	});
});
