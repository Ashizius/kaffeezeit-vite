import type { Meta, StoryObj } from '@storybook/react';
import { expect, within } from '@storybook/test';

import { ErrorElement } from './';
import type {TErrorElementProps} from './types.ts';

const args:TErrorElementProps = {};

const meta = {
	title: 'Components/ErrorElement',
	component: ErrorElement,
	parameters: {
		// More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
		layout: 'centered',
    args: args
	},
} satisfies Meta<typeof ErrorElement>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on interaction testing: https://storybook.js.org/docs/writing-tests/interaction-testing
export const Default: Story = {
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const element = canvas.getByTestId('ErrorElement');
		await expect(element).toBeInTheDocument();
	},
  args
};
