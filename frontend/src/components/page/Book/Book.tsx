import {
	PropsWithChildren,
	ReactElement,
	useLayoutEffect,
	useState,
} from 'react';
import styles from './Book.module.scss';
import { Button, Link } from '../../common/Action/Action';
import { Anchor } from '../../common/Anchor/Anchor';

type BookProps = PropsWithChildren<{
	pageNumber: number;
}>;

export const Book = ({ children, pageNumber }: BookProps): ReactElement => {
	const [pages, setPages] = useState(0);
	useLayoutEffect(() => {
		setPages((pages) => pages + 1);
	}, [pageNumber]);
	return (
		<>
			<Link href="/">
				<p className={styles.book}>main</p>
			</Link>
			<Link href="/recipe">
				<p className={styles.book}>recipe</p>
			</Link>
      <Button>AAAA</Button>
			{children}
			<p>{pages}</p>
		</>
	);
};
