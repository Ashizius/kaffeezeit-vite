import {
	AnchorHTMLAttributes,
	FunctionComponent,
  MouseEvent
} from 'react';
import { FormProps, NavLink, NavLinkProps, To } from 'react-router-dom';
import { Link, LinkProps } from 'react-router-dom';

export type TFormProps = FormProps;

export type TFormElement = 'form' | FunctionComponent<TFormProps>;

export type TFormContext = {
	FormElement: TFormElement;
};

export type TFormContextProvider = {
	FormElement: TFormElement;
};