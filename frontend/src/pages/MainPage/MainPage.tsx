import clsx from 'clsx';
import styles from './MainPage.module.scss';
import type { TMainPageProps } from './types.ts';
import { Section } from '../../components/layouts/Section/Section.tsx';
import { Modal } from '../../components/layouts/Modal/index.tsx';
import { Outlet } from 'react-router-dom';
import { Link } from '../../components/common/Action/index.tsx';
import { useModal } from '../../components/layouts/Modal/hooks.tsx';

export function MainPage({ className }: TMainPageProps) {
	//const ref = useModal();
	return (
		<>
			<Section
				title={'MainPage'}
				className={clsx(styles.container, className)}
				data-testid="MainPage"
			>
				<Link to={'login'} >LOGIN</Link>
			</Section>
			<Outlet/>
		</>
	);
}
