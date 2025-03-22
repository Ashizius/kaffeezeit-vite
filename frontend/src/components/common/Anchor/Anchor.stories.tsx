import type { Meta, StoryObj } from '@storybook/react';
import { expect, within } from '@storybook/test';

import { Anchor } from './';
import type {TAnchorProps} from './types.ts';

const args:TAnchorProps = {};

const meta = {
	title: 'Components/Anchor',
	component: Anchor,
	parameters: {
		// More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
		layout: 'centered',
    args: args
	},
} satisfies Meta<typeof Anchor>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on interaction testing: https://storybook.js.org/docs/writing-tests/interaction-testing
export const WithStateChanged: Story = {
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const element = canvas.getByTestId('Anchor');
		await expect(element).toBeInTheDocument();
	},
  args
};
