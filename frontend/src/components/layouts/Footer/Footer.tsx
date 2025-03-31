import clsx from 'clsx';
import styles from './Footer.module.scss';
import type {TFooterProps} from './types.ts';

export function Footer({className}:TFooterProps) {
	return (
		<footer className={clsx(styles.container, className)} data-testid="Footer">
			Footer
		</footer>
	);
}
