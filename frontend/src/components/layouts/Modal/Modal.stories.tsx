import type { Meta, StoryObj } from '@storybook/react';
import { expect, within } from '@storybook/test';

import { ModalLayout } from './Modal.tsx';
import type { TModalProps } from './types.ts';
import { MockChild } from '../../../stories/MockChild.tsx';

const args: TModalProps = {
	title: 'title',
	children: <MockChild />,
};

const meta = {
	title: 'Components/Modal',
	component: ModalLayout,
	parameters: {
		// More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
		layout: 'fullscreen',
		args: args,
	},
	decorators: [
		(Story) => (
			<div
				style={{
					position: 'absolute',
          inset: '0',
					width: '100vw',
					height: '100vh',
					display: 'flex',
					justifyContent: 'center',
					alignContent: 'center',
					backgroundColor: 'white',
				}}
			>
				<Story />
			</div>
		),
	],
} satisfies Meta<typeof ModalLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on interaction testing: https://storybook.js.org/docs/writing-tests/interaction-testing
export const Default: Story = {
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const element = canvas.getByTestId('Modal');
		await expect(element).toBeInTheDocument();
	},
  args
};
