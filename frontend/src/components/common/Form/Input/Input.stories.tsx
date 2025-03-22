import type { Meta, StoryObj } from '@storybook/react';
import { expect, within } from '@storybook/test';

import { Input } from './';
import type {TInputProps} from './types.ts';

const args:TInputProps = {};

const meta = {
	title: 'Form/Input',
	component: Input,
	parameters: {
		// More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
		layout: 'centered',
    args: args
	},
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on interaction testing: https://storybook.js.org/docs/writing-tests/interaction-testing
export const WithStateChanged: Story = {
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const element = canvas.getByTestId('Input');
		await expect(element).toBeInTheDocument();
	},
  args
};
