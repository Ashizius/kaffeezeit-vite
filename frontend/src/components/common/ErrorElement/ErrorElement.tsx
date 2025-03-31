import clsx from 'clsx';
import styles from './ErrorElement.module.scss';
import type {TErrorElementProps} from './types.ts';

export function ErrorElement({className}:TErrorElementProps) {
	return (
		<div className={clsx(styles.container, className)} data-testid="ErrorElement">
			ErrorElement
		</div>
	);
}
