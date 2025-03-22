import type { Meta, StoryObj } from '@storybook/react';
import { expect, within } from '@storybook/test';

import { Loader } from './Loader';
import type {TLoaderProps} from './types.ts';

const args:TLoaderProps = {};

const meta = {
	title: 'Components/Loader',
	component: Loader,
	parameters: {
		// More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
		layout: 'centered',
    args: args
	},
} satisfies Meta<typeof Loader>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on interaction testing: https://storybook.js.org/docs/writing-tests/interaction-testing
export const WithStateChanged: Story = {
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const element = canvas.getByTestId('Loader');
		await expect(element).toBeInTheDocument();
	},
  args
};
