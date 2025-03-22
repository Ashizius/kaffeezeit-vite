import clsx from 'clsx';
import styles from './RecipePage.module.scss';
import type {TRecipePageProps} from './types.ts';

export function RecipePage({className}:TRecipePageProps) {
	return (
		<div className={clsx(styles.container, className)} data-testid="RecipePage">
			RecipePage
		</div>
	);
}
