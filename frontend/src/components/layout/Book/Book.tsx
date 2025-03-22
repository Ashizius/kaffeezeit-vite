import React, {
	PropsWithChildren,
	ReactElement,
	useEffect,
	useLayoutEffect,
	useRef,
	useState,
	ReactNode,
  useContext,
} from 'react';
import styles from './Book.module.scss';
import { Button, Link } from '../../common/Action';
import { Anchor } from '../../common/Anchor/Anchor';

import { Routes, Route, useLocation, useNavigation } from 'react-router-dom';
import { usePreviousClone } from './hooks';
import { PageChangerContext } from '../../../contexts/PageChanger/PageChangerContext';

type BookProps = PropsWithChildren<{
	pageNumber: number;
	background: ReactNode;
}>;

export const Book = ({
	children,
	pageNumber,
	background,
}: BookProps): ReactElement => {
	const [pages, setPages] = useState(0);
	//const { current, old, catchComponent } = usePreviousClone(children, []);

  const navigation = useNavigation();
  

	useLayoutEffect(() => {
		//setPages((pages) => pages + 1);
		//setTimeout(changer,1000);
		console.log('bookre:',navigation);
		return () => {
      //catchComponent();
      //changer();
      console.log('bookde:',navigation);
    };
	});
	return (
		<>
			<Link href="/">
				<p className={styles.book}>main</p>
			</Link>
			<Link href={{ pathname: '/recipe' }}>
				<p className={styles.book}>recipe</p>
			</Link>
			<Button>AAAA</Button>
			{children}
			{background}
			<p>{pages}</p>
			{background}
		</>
	);
};
