import clsx from 'clsx';
import styles from './MainPage.module.scss';
import type {TMainPageProps} from './types.ts';

export function MainPage({className}:TMainPageProps) {
	return (
		<div className={clsx(styles.container, className)} data-testid="MainPage">
			MainPage
		</div>
	);
}
