import clsx from 'clsx';
import { TInputProps } from './types';
import styles from './Input.module.scss';
import { ChangeEventHandler, useCallback, useState } from 'react';

export function withInput<K=string>({ className,name, onChange, type, value, ...props }: TInputProps<K>) {
	const [inputValue, setInputValue] = useState<string>(value || '');
  console.log(type+' rerendered');
	const inputChange: ChangeEventHandler<HTMLInputElement> = useCallback((e) => {
		setInputValue(e.target.value || '');
		onChange?.(name, e.target.value);
	},[onChange])
	return (
		<input
			{...props}
      value={inputValue}
			onChange={inputChange}
			className={clsx(styles.container, className)}
			data-testid="Input"
      name = {name}
		/>
	);
}
