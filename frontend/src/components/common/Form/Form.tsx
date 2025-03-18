import { useContext } from 'react';
import { FormContext } from './FormContext';
import { TFormContext, TFormProps } from './types';

export const Form = ({ children, ...props }: TFormProps) => {
	const { FormElement } = useContext<TFormContext>(FormContext);
	return <FormElement {...props}>{children}</FormElement>;
};
