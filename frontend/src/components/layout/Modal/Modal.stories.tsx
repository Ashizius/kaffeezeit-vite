import type { Meta, StoryObj } from '@storybook/react';
import { expect, within } from '@storybook/test';

import { Modal } from './Modal';
import type {TModalProps} from './types.ts';

const args:TModalProps = {};

const meta = {
	title: 'Components/Modal',
	component: Modal,
	parameters: {
		// More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
		layout: 'centered',
    args: args
	},
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on interaction testing: https://storybook.js.org/docs/writing-tests/interaction-testing
export const WithStateChanged: Story = {
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const element = canvas.getByTestId('Modal');
		await expect(element).toBeInTheDocument();
	},
};
