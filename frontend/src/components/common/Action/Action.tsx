import clsx from 'clsx';
import { ReactElement, useCallback, useContext } from 'react';
import { ActionProps, ActionVariant, ButtonType } from './types';
import styles from './Action.module.scss';
import { Anchor } from '../Anchor/Anchor';
import { PageChangerContext } from '../../../contexts/PageChanger/PageChangerContext';

const withAction = (actionHocProps: ActionProps) => {
	return function Action(actionProps: ActionProps): ReactElement {
		let {
			tag,
			type,
			variant,
			className,
			href,
			disabled,
			children,
			changeInc,
			...other
		} = Object.assign({}, { ...actionHocProps }, { ...actionProps });
		tag = tag || 'button';
		changeInc = changeInc === undefined ? +1 : changeInc;
		const Tag = tag === 'a' ? Anchor : tag;
		if (tag === 'button') {
			href = undefined;
			type = type || ButtonType.button;
		} else {
			type = undefined;
		}

		const { changer } = useContext(PageChangerContext);

		const onClick = useCallback(
			(e: React.SyntheticEvent) => {
        other.onClick?.(e);
				if (changeInc !== 0) {
					changer(changeInc);
				}
			},
			[other.onClick, changeInc]
		);

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
				onClick={onClick}
				data-testid="Action"
			>
				{children}
			</Tag>
		);
	};
};

export const Action = withAction({});

export const Link = withAction({
	tag: 'a',
	variant: ActionVariant.link,
	changeInc: +1,
});

export const Button = withAction({
	tag: 'button',
	variant: ActionVariant.main,
	changeInc: +1,
});

export const SubmitButton = withAction({
	tag: 'button',
	variant: ActionVariant.main,
	type: ButtonType.submit,
	changeInc: +1,
});

export const ResetButton = withAction({
	tag: 'button',
	variant: ActionVariant.main,
	type: ButtonType.reset,
	changeInc: +1,
});
