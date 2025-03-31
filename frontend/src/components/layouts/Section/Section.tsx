import clsx from 'clsx';
import styles from './Section.module.scss';
import type { TSectionProps } from './types.ts';
import { forwardRef } from 'react';

export const Section = forwardRef<HTMLElement,TSectionProps>(function Section(
	{ className, sectionClass, children, title },
	ref
) {
	return (
		<section
			ref={ref}
			className={clsx(styles.container, className)}
			data-testid="Section"
		>
			<h2 className={clsx(styles.container, sectionClass)}>{title}</h2>
			<div>{children}</div>
		</section>
	);
});
