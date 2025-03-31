import type { Meta, StoryObj } from '@storybook/react';
import { expect, within } from '@storybook/test';

import { Footer } from './';
import type {TFooterProps} from './types.ts';

const args:TFooterProps = {};

const meta = {
	title: 'Layouts/Footer',
	component: Footer,
	parameters: {
		// More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
		layout: 'centered',
    args: args
	},
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on interaction testing: https://storybook.js.org/docs/writing-tests/interaction-testing
export const Default: Story = {
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const element = canvas.getByTestId('Footer');
		await expect(element).toBeInTheDocument();
	},
  args
};
