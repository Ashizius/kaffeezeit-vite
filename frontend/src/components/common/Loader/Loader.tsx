import clsx from 'clsx';
import styles from './Loader.module.scss';
import type {TLoaderProps} from './types.ts';

export function Loader({className}:TLoaderProps) {
	return (
		<div className={clsx(styles.container, className)} data-testid="Loader">
			Loader
		</div>
	);
}
