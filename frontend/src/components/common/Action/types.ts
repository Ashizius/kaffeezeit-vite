import { FunctionComponent, PropsWithChildren, SyntheticEvent } from "react";
import { TAnchorHref } from "../Anchor/types";
import {LinkProps} from 'react-router-dom';


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
	href?: TAnchorHref,
	name?: string,
  disabled?: boolean;
  state?: any;
  change?: 'next'|'previous'|'modal'
}>;
