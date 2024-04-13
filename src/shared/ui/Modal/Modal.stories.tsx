import type { Meta, StoryObj } from '@storybook/react';
import '@/shared/styles/globals.scss';

import { Modal } from './Modal';

const meta: Meta<typeof Modal> = {
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
