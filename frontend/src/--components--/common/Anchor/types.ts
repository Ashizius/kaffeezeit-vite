import {
	AnchorHTMLAttributes,
	FunctionComponent,
  MouseEvent
} from 'react';
import { NavLink, NavLinkProps, To } from 'react-router-dom';
import { Link, LinkProps } from 'react-router-dom';

export type TAnchorHref = ((e: MouseEvent<HTMLAnchorElement>) => void) | To;

export type TAnchorProps = Partial<LinkProps> & {
	href?: TAnchorHref;
};

export type TAnchorHTMLProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
	to?: To;
};

export type TAnchorElement = 'a' | FunctionComponent<TAnchorProps>;
export type TLinkElement = 'a' | typeof Link;

export type TAnchorContext = {
	LinkElement: TAnchorElement;
};

export type TAnchorContextProvider = {
	LinkElement: TLinkElement;
};