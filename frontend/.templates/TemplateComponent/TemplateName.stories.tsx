import type { Meta, StoryObj } from '@storybook/react';
import { expect, within } from '@storybook/test';

import { TemplateName } from './';
import type {TTemplateNameProps} from './types.ts';

const args:TTemplateNameProps = {};

const meta = {
	title: 'Components/TemplateName',
	component: TemplateName,
	parameters: {
		// More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
		layout: 'centered',
    args: args
	},
} satisfies Meta<typeof TemplateName>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on interaction testing: https://storybook.js.org/docs/writing-tests/interaction-testing
export const WithStateChanged: Story = {
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const element = canvas.getByTestId('TemplateName');
		await expect(element).toBeInTheDocument();
	},
  args
};
