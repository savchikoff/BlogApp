/* eslint-disable simple-import-sort/imports */
import type { Meta, StoryObj } from '@storybook/react';
import { authors } from '@/shared/consts/authors';

import Author from './Author';

import '@/shared/styles/globals.scss';

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
