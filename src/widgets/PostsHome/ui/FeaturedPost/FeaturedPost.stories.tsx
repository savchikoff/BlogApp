/* eslint-disable simple-import-sort/imports */
import type { Meta, StoryObj } from '@storybook/react';
import { blogPosts } from '@/shared/consts/blogPosts';

import FeaturedPost from './FeaturedPost';

import '@/shared/styles/globals.scss';

const { id, author, createdAt, title, text, img } = blogPosts[0];

const meta: Meta<typeof FeaturedPost> = {
    title: "UI/FeaturedPost",
    component: FeaturedPost,
    argTypes: {
        authorName: { control: 'string' },
        createdAt: { control: 'string' },
        title: { control: 'string' },
        text: { control: 'string' }
    },
};

export default meta;

type Story = StoryObj<typeof FeaturedPost>;

export const Primary: Story = {
    args: {
        id,
        authorName: author,
        createdAt,
        title,
        text,
        img
    },
};
