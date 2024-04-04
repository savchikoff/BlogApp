import type { Meta, StoryObj } from '@storybook/react';
import "@/shared/styles/globals.scss";

import { Navigation } from '..';

const meta: Meta<typeof Navigation> = {
    component: Navigation,
    argTypes: {
        isWithPrivacy: { control: 'boolean' }
    }
};

export default meta;

type Story = StoryObj<typeof Navigation>;

export const WithPrivacy: Story = {
    args: {
        isWithPrivacy: true
    },
};
export const WithoutPrivacy: Story = {
    args: {
        isWithPrivacy: false
    },
};