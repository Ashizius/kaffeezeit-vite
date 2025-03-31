import type { Meta, StoryObj } from '@storybook/react';
import { expect, within } from '@storybook/test';

import { MainLayout } from './';
import type {TMainLayoutProps} from './types.ts';

const args:TMainLayoutProps = {};

const meta = {
	title: 'Layouts/MainLayout',
	component: MainLayout,
	parameters: {
		// More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
		layout: 'centered',
    args: args
	},
} satisfies Meta<typeof MainLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on interaction testing: https://storybook.js.org/docs/writing-tests/interaction-testing
export const Default: Story = {
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const element = canvas.getByTestId('MainLayout');
		await expect(element).toBeInTheDocument();
	},
  args
};
