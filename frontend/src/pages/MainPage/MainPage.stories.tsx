import type { Meta, StoryObj } from '@storybook/react';
import { expect, within } from '@storybook/test';

import { MainPage } from './MainPage';
import type {TMainPageProps} from './types.ts';

const args:TMainPageProps = {};

const meta = {
	title: 'Pages/MainPage',
	component: MainPage,
	parameters: {
		// More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
		layout: 'fullscreen',
    args: args
	},
} satisfies Meta<typeof MainPage>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on interaction testing: https://storybook.js.org/docs/writing-tests/interaction-testing
export const WithStateChanged: Story = {
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const element = canvas.getByTestId('MainPage');
		await expect(element).toBeInTheDocument();
	},
};
