import type { Meta, StoryObj } from '@storybook/react';
import "@/shared/styles/globals.scss";

import { Pagination } from './Pagination';

const meta: Meta<typeof Pagination> = {
    component: Pagination,
    argTypes: {
        postsPerPage: { control: 'number' },
        totalPosts: { control: 'number' },
    }
};

export default meta;

type Story = StoryObj<typeof Pagination>;

export const Primary: Story = {
    args: {
        postsPerPage: 5,
        totalPosts: 7
    },
};