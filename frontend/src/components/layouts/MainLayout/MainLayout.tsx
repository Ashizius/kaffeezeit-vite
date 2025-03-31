import clsx from 'clsx';
import styles from './MainLayout.module.scss';
import type {TMainLayoutProps} from './types.ts';
import { Header } from '../Header/Header.tsx';
import { Footer } from '../Footer/Footer.tsx';

export function MainLayout({className, children}:TMainLayoutProps) {
	return (
		<main className={clsx(styles.container, className)} data-testid="MainLayout">
			<Header></Header>
      {children}
      <Footer></Footer>
		</main>
	);
}
