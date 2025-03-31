import type { Meta, StoryObj } from '@storybook/react';
import { expect, within } from '@storybook/test';

import { Header } from './';
import type {THeaderProps} from './types.ts';

const args:THeaderProps = {};

const meta = {
	title: 'Layouts/Header',
	component: Header,
	parameters: {
		// More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
		layout: 'centered',
    args: args
	},
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on interaction testing: https://storybook.js.org/docs/writing-tests/interaction-testing
export const Default: Story = {
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const element = canvas.getByTestId('Header');
		await expect(element).toBeInTheDocument();
	},
  args
};
