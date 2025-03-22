import clsx from 'clsx';
import styles from './TemplateName.module.scss';
import type {TTemplateNameProps} from './types.ts';

export function TemplateName({className}:TTemplateNameProps) {
	return (
		<div className={clsx(styles.container, className)} data-testid="TemplateName">
			TemplateName
		</div>
	);
}
