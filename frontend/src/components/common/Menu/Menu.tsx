import clsx from 'clsx';
import styles from './Menu.module.scss';
import type { TMenuItem, TMenuItemElement, TMenuProps } from './types.ts';

import { useCallback } from 'react';
import { Button, Link } from '../../common/Action/index.tsx';

export function Menu({
	className,
	defaultElement,
	items,
	listClassName,
	itemsClassName,
  type,
}: TMenuProps) {
	const defaultItemElement =
		defaultElement ||
		(({ action, content, className }: TMenuItemElement) => type==='button'?(
			<Button className={className} to={action}>
				{content}
			</Button>
		):(
			<Link className={className} to={action}>
				{content}
			</Link>
		));
	const itemMapper = useCallback(
		(
			{ id, customElement, content, action, className }: TMenuItemElement,
			index: number
		) => {
			const element = customElement || defaultItemElement;
			return (
				<li className={clsx(styles.listItem, itemsClassName)} key={id || index}>
					{element({ content, action, className })}
				</li>
			);
		},
		[items, defaultElement]
	);
	return (
		<nav className={clsx(styles.container, className)} data-testid="Menu">
			<ul className={clsx(styles.list, listClassName)}>
				{items.map(itemMapper)}
			</ul>
		</nav>
	);
}
