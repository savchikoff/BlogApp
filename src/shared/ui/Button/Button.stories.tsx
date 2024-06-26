import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';

import '@/shared/styles/globals.scss';

const meta: Meta<typeof Button> = {
	title: "UI/Button",
	component: Button,
	argTypes: {
		isPrimary: { control: 'boolean' },
		children: { control: 'text' },
		disabled: { control: 'boolean' },
		type: {
			options: ['button', 'reset', 'submit'],
			control: { type: 'radio' },
		},
	},
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
	args: {
		children: 'Button',
		isPrimary: true,
		disabled: false,
		type: 'button',
	},
};
export const Secondary: Story = {
	args: {
		children: 'Button',
		isPrimary: false,
		disabled: false,
		type: 'button',
	},
};
