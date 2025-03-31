import type { Meta, StoryObj } from '@storybook/react';
import { expect, within } from '@storybook/test';

import { Card } from './';
import type { TCardProps } from './types.ts';
import { MockChild } from '../../../stories/MockChild.tsx';

const args: TCardProps = {
	title: 'title',
	children: (
		<MockChild/>
	),
};

const meta = {
	title: 'Layouts/Card',
	component: Card,
	parameters: {
		// More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
		layout: 'centered',
		args: args,
	},
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on interaction testing: https://storybook.js.org/docs/writing-tests/interaction-testing
export const Default: Story = {
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const element = canvas.getByTestId('Card');
		await expect(element).toBeInTheDocument();
	},
	args,
};
