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

export const withPrivacy: Story = {
    args: {
        isWithPrivacy: true
    },
};
export const withoutPrivacy: Story = {
    args: {
        isWithPrivacy: false
    },
};