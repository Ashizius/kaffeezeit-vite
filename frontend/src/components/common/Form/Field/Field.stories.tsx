import type { Meta, StoryObj } from '@storybook/react';
import { expect, within } from '@storybook/test';

import { Field } from './';
import type {TFieldProps} from './types.ts';

const args:TFieldProps = {};

const meta = {
	title: 'Form/Field',
	component: Field,
	parameters: {
		// More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
		layout: 'centered',
    args: args
	},
} satisfies Meta<typeof Field>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on interaction testing: https://storybook.js.org/docs/writing-tests/interaction-testing
export const WithStateChanged: Story = {
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const element = canvas.getByTestId('Field');
		await expect(element).toBeInTheDocument();
	},
  args
};
