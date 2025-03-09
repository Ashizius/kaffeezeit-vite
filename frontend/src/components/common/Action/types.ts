import { FunctionComponent, PropsWithChildren, SyntheticEvent } from "react";

export enum ActionVariant {
  main = 'main',
  link='link',
}

export enum ButtonType {
  button= 'button',
  submit = 'submit',
  reset = 'reset'
}

export type ActionTag = keyof Pick<React.JSX.IntrinsicElements, "a" | "button"> | FunctionComponent;

export type ActionProps = PropsWithChildren<{
  tag?: ActionTag;
	type?: ButtonType | keyof typeof ButtonType;
	variant?: ActionVariant | keyof typeof ActionVariant;
	onClick?: (e?:SyntheticEvent) => void;
	className?: string;
	href?: string,
	name?: string,
  disabled?: boolean;
  changeInc?: number;
}>;
