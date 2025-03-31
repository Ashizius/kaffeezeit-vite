import clsx from 'clsx';
import { ReactElement, useCallback, useContext } from 'react';
import { TActionProps, ActionVariant, TButtonType } from './types';
import styles from './Action.module.scss';
import { Anchor } from '../Anchor/Anchor';

import {
  useLocation,
} from 'react-router-dom';

export const withAction = (actionHocProps: TActionProps) => {
	return function Action(actionProps: TActionProps): ReactElement {
		let {
			tag,
			type,
			variant,
			className,
			to,
			disabled,
			children,
      change,
			...other
		} = Object.assign({}, { ...actionHocProps }, { ...actionProps });
		tag = tag || 'button';
		const Tag = tag === 'a' ? Anchor : tag;
		if (tag === 'button') {
			to = undefined;
			type = type || TButtonType.button;
		} else {
			type = undefined;
		}
		return (
			<Tag
				className={clsx(styles.action, className, {
					[variant ? styles[variant] : '']: variant !== undefined,
					[styles.disabled]: disabled,
				})}
				disabled={disabled}
				{...other}
				type={type}
				to={to}
				data-testid="Action"
			>
				{children}
			</Tag>
		);
	};
};
