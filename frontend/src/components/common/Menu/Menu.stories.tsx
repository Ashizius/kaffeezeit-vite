import type { Meta, StoryObj } from '@storybook/react';
import { expect, within } from '@storybook/test';

import { Menu } from './';
import type { TMenuItemElement, TMenuProps } from './types.ts';

const items: TMenuItemElement[] = [
	{
		content: 'item1',
		action: '/MainPage',
	},
	{
		content: 'item2',
		action: '/MainPage',
	},
];

const args: TMenuProps = {items};

const meta = {
	title: 'Components/Menu',
	component: Menu,
	parameters: {
		// More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
		layout: 'centered',
		args: args,
	},
} satisfies Meta<typeof Menu>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on interaction testing: https://storybook.js.org/docs/writing-tests/interaction-testing
export const Default: Story = {
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const element = canvas.getByTestId('Menu');
		await expect(element).toBeInTheDocument();
	},
	args,
};
