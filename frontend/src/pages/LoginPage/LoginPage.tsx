import clsx from 'clsx';
import styles from './LoginPage.module.scss';
import type { TLoginPageProps } from './types.ts';
import { LoginForm } from '../../components/blocks/LoginForm/LoginForm.tsx';
import { Outlet } from 'react-router-dom';

export function LoginPage({ className, ...props }: TLoginPageProps) {
	return (
		<>
			<LoginForm
				className={clsx(styles.container, className)}
				data-testid="LoginPage"
				{...props}
			/>
		</>
	);
}
