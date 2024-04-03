import type { Meta, StoryObj } from '@storybook/react';
import "@/shared/styles/globals.scss";

import { Button } from './Button';

const meta: Meta<typeof Button> = {
    component: Button,
    argTypes: {
        isPrimary: { control: 'boolean' },
        children: { control: 'text' },
        disabled: { control: 'boolean' },
        type: {
            options: ['button', 'reset', 'submit'],
            control: { type: 'radio' },
        },
    }
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
    args: {
        children: "Button",
        isPrimary: true,
        disabled: false,
        type: "button"
    },
};
export const Secondary: Story = {
    args: {
        children: "Button",
        isPrimary: false,
        disabled: false,
        type: "button"
    },
};