import type { Meta, StoryObj } from '@storybook/react';
import { expect, within } from '@storybook/test';

import { Action } from './';
import type {TActionProps} from './types.ts';

const args:TActionProps = {};

const meta = {
	title: 'Components/Action',
	component: Action,
	parameters: {
		// More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
		layout: 'centered',
    args: args
	},
} satisfies Meta<typeof Action>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on interaction testing: https://storybook.js.org/docs/writing-tests/interaction-testing
export const WithStateChanged: Story = {
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const element = canvas.getByTestId('Action');
		await expect(element).toBeInTheDocument();
	},
  args
};
