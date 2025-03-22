import { FunctionComponent, PropsWithChildren, SyntheticEvent } from "react";
import { TAnchorHref } from "../Anchor/types";
import {LinkProps} from 'react-router-dom';


export enum ActionVariant {
  main = 'main',
  link='link',
}

export enum TButtonType {
  button= 'button',
  submit = 'submit',
  reset = 'reset'
}

export type TActionTag = keyof Pick<React.JSX.IntrinsicElements, "a" | "button"> | FunctionComponent;

export type TActionProps = PropsWithChildren<{
  tag?: TActionTag;
  type?: TButtonType | keyof typeof TButtonType;
  variant?: ActionVariant | keyof typeof ActionVariant;
  onClick?: (e?:SyntheticEvent) => void;
  className?: string;
  href?: TAnchorHref,
  name?: string,
  disabled?: boolean;
  state?: any;
  change?: 'next'|'previous'|'modal'
}>;
