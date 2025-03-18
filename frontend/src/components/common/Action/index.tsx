import { withAction } from "./Action";
import { ActionVariant, ButtonType } from "./types";

export const Action = withAction({});

export const Link = withAction({
	tag: 'a',
	variant: ActionVariant.link
});

export const Button = withAction({
	tag: 'button',
	variant: ActionVariant.main,
});

export const SubmitButton = withAction({
	tag: 'button',
	variant: ActionVariant.main,
	type: ButtonType.submit,
});

export const ResetButton = withAction({
	tag: 'button',
	variant: ActionVariant.main,
	type: ButtonType.reset,
});
