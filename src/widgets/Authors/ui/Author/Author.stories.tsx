import type { Meta, StoryObj } from '@storybook/react';
import '@/shared/styles/globals.scss';

import Author from './Author';
import { authors } from '@/shared/consts/authors';

const { name, role, company, img, link } = authors[0];

const meta: Meta<typeof Author> = {
    component: Author,
    argTypes: {
        authorName: { control: 'text' },
        position: { control: 'text' }
    },
};

export default {
    title: 'UI/Author',
    component: Author
};

type Story = StoryObj<typeof Author>;

export const Primary: Story = {
    args: {
        authorName: name,
        position: role,
        img: img,
        link: link,
    },
};
