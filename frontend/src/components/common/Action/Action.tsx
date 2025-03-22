import clsx from 'clsx';
import { ReactElement, useCallback, useContext } from 'react';
import { ActionProps, ActionVariant, ButtonType } from './types';
import styles from './Action.module.scss';
import { Anchor } from '../Anchor/Anchor';
import { PageChangerContext } from '../../../contexts/PageChanger/PageChangerContext';

import {
  useLocation,
} from 'react-router-dom';

export const withAction = (actionHocProps: ActionProps) => {
	return function Action(actionProps: ActionProps): ReactElement {
    const location = useLocation()
		let {
			tag,
			type,
			variant,
			className,
			href,
			disabled,
			children,
      change,
      state,
      onClick,
			...other
		} = Object.assign({}, { ...actionHocProps }, { ...actionProps });
		tag = tag || 'button';
		const Tag = tag === 'a' ? Anchor : tag;
		if (tag === 'button') {
			href = undefined;
			type = type || ButtonType.button;
		} else {
			type = undefined;
		}
      const {changer} = useContext(PageChangerContext);
    const action=(e?: React.SyntheticEvent)=>{
      changer();
      onClick?.(e);
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
				href={href}
				onClick={action}
				data-testid="Action"
        state={{backgound:location.pathname}}
			>
				{children}
			</Tag>
		);
	};
};
