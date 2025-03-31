import { TAnchorProps } from './types';
import clsx from 'clsx';
import styles from './Anchor.module.scss';
import { useAnchor } from './hooks';

export function Anchor({ to, className, ...otherProps }: TAnchorProps) {
	const [Tag, anchorProps] = useAnchor(to);
	return (
		<Tag
			className={clsx(styles.container, className)}
			{...otherProps}
			{...anchorProps}
			data-testid="Anchor"
		></Tag>
	);
}
