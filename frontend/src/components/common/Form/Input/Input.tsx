import clsx from 'clsx';
import { TInputProps } from './types';
import styles from './Input.module.scss';
import { ChangeEventHandler, useState } from 'react';

export function withInput({ className, onChange, type, ...props }: TInputProps) {
	const [value, setValue] = useState<string>(props.value || '');
	const inputChange: ChangeEventHandler<HTMLInputElement> = (e) => {
		setValue(e.target.value || '');
		onChange?.(value);
	};
	return (
		<input
			{...props}
			onChange={inputChange}
			className={clsx(styles.container, className)}
			data-testid="Input"
		/>
	);
}
