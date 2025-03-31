import clsx from 'clsx';
import styles from './RecipePage.module.scss';
import type {TRecipePageProps} from './types.ts';
import { Link, useLocation } from 'react-router-dom';

export function RecipePage({className}:TRecipePageProps) {
  const location = useLocation()
	return (
		<div className={clsx(styles.container, className)} data-testid="RecipePage">
			RecipePage
      <Link to={'/main/login'} state={{backgroundLocation:location.pathname}}>LOGIN</Link>
		</div>
	);
}
