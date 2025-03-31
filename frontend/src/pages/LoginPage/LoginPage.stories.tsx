import type { Meta, StoryObj } from '@storybook/react';
import { expect, within } from '@storybook/test';

import { LoginPage } from './LoginPage';
import type {TLoginPageProps} from './types.ts';

const args:TLoginPageProps = {};

const meta = {
	title: 'Pages/LoginPage',
	component: LoginPage,
	parameters: {
		// More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
		layout: 'fullscreen',
    args: args
	},
} satisfies Meta<typeof LoginPage>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on interaction testing: https://storybook.js.org/docs/writing-tests/interaction-testing
export const Default: Story = {
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const element = canvas.getByTestId('LoginPage');
		await expect(element).toBeInTheDocument();
	},
  args
};
