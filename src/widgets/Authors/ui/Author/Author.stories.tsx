import type { Meta, StoryObj } from '@storybook/react';
import '@/shared/styles/globals.scss';

import Author from './Author';
import { authors } from '@/shared/consts/authors';

const { name, role, img, link } = authors[0];

const meta: Meta<typeof Author> = {
    title: 'UI/Author',
    component: Author,
    argTypes: {
        authorName: { control: 'text' },
        position: { control: 'text' }
    },
};

export default meta;

type Story = StoryObj<typeof Author>;

export const Primary: Story = {
    args: {
        authorName: name,
        position: role,
        img,
        link
    },
};
