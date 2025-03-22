import type { Meta, StoryObj } from '@storybook/react';
import { expect, within } from '@storybook/test';

import { RecipePage } from './RecipePage';
import type {TRecipePageProps} from './types.ts';

const args:TRecipePageProps = {};

const meta = {
	title: 'Pages/RecipePage',
	component: RecipePage,
	parameters: {
		// More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
		layout: 'fullscreen',
    args: args
	},
} satisfies Meta<typeof RecipePage>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on interaction testing: https://storybook.js.org/docs/writing-tests/interaction-testing
export const WithStateChanged: Story = {
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const element = canvas.getByTestId('RecipePage');
		await expect(element).toBeInTheDocument();
	},
};
