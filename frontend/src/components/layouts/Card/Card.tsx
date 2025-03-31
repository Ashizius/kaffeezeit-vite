import clsx from 'clsx';
import styles from './Card.module.scss';
import type { TCardProps } from './types.ts';

export function Card({ className, children, title }: TCardProps) {
	return (
		<article className={clsx(styles.container, className)} data-testid="Card">
			{title && <h4 className={clsx(styles.title)}>{title}</h4>}
      
			{children}
		</article>
	);
}
