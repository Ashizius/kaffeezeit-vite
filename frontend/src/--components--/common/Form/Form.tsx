import { useContext } from 'react';
import { FormContext } from './FormContext';
import { TFormContext, TFormProps } from './types';
import clsx from 'clsx';
import styles from './Form.module.scss';

export const Form = ({ children,className, ...props }: TFormProps) => {
	const { FormElement } = useContext<TFormContext>(FormContext);
	return <FormElement className={clsx(styles.container, className)} {...props}>{children}</FormElement>;
};
