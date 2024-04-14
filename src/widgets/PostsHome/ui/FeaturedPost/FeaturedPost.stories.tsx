import type { Meta, StoryObj } from '@storybook/react';
import '@/shared/styles/globals.scss';

import FeaturedPost from './FeaturedPost';
import { blogPosts } from '@/shared/consts/blogPosts';

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
        id: id,
        authorName: author,
        createdAt: createdAt,
        title: title,
        text: text,
        img: img
    },
};
