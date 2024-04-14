import type { Meta, StoryObj } from '@storybook/react';

import { Modal } from './Modal';

import '@/shared/styles/globals.scss';

const meta: Meta<typeof Modal> = {
	title: "UI/Modal",
	component: Modal,
	argTypes: {
		isOpen: { control: 'boolean' },
		children: { control: 'text' },
	},
};

export default meta;

type Story = StoryObj<typeof Modal>;

export const Primary: Story = {
	args: {
		isOpen: true,
		children: 'Hello',
	},
};
