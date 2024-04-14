/* eslint-disable simple-import-sort/imports */
import type { Meta, StoryObj } from '@storybook/react';
import { categories } from '@/shared/consts/categories';

import Category from './Category';

import '@/shared/styles/globals.scss';

const category = categories.Business;

const meta: Meta<typeof Category> = {
    title: "UI/Category",
    component: Category,
    argTypes: {
        category: { control: 'string' },
        link: { control: 'string' }
    },
};

export default meta;

type Story = StoryObj<typeof Category>;

export const Primary: Story = {
    args: {
        category: "Business",
        link: category.link,
        img: category.img
    },
};
