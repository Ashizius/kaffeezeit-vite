import React, {
	PropsWithChildren,
	ReactElement,
	useEffect,
	useLayoutEffect,
	useRef,
	useState,
  ReactNode
} from 'react';
import styles from './Book.module.scss';
import { Button, Link } from '../../common/Action';
import { Anchor } from '../../common/Anchor/Anchor';

import { Routes, Route } from 'react-router-dom';
import { usePreviousClone } from './hooks';

type BookProps = PropsWithChildren<{
	pageNumber: number;
  background: ReactNode
}>;

export const Book = ({ children, pageNumber, background }: BookProps): ReactElement => {
	const [pages, setPages] = useState(0);
  const {current,old,catchComponent} = usePreviousClone(children, []);
	useLayoutEffect(() => {
		setPages((pages) => pages + 1);
    setTimeout(catchComponent,1000);
	}, [pageNumber]);
	return (
		<>
			<Link href="/">
				<p className={styles.book}>main</p>
			</Link>
			<Link href={{ pathname: '/recipe' }}>
				<p className={styles.book}>recipe</p>
			</Link>
			<Button>AAAA</Button>
			{current}
      {old}
			<p>{pages}</p>
      {background}
		</>
	);
};
