import type { Meta, StoryObj } from '@storybook/react';
import { expect, within } from '@storybook/test';

import { LoginForm } from './';
import type {TLoginFormProps} from './types.ts';

const args:TLoginFormProps = {};

const meta = {
	title: 'Blocks/LoginForm',
	component: LoginForm,
	parameters: {
		// More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
		layout: 'centered',
    args: args
	},
} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on interaction testing: https://storybook.js.org/docs/writing-tests/interaction-testing
export const Default: Story = {
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const element = canvas.getByTestId('LoginForm');
		await expect(element).toBeInTheDocument();
	},
  args
};
