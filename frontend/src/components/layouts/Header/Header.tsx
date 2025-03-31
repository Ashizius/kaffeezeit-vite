import clsx from 'clsx';
import styles from './Header.module.scss';
import type {THeaderProps} from './types.ts';

export function Header({className}:THeaderProps) {
	return (
		<header className={clsx(styles.container, className)} data-testid="Header">
			Header
		</header>
	);
}
