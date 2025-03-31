import clsx from "clsx";
import { TFieldProps } from "./types";
import styles from './Field.module.scss';
import {memo} from "react";

export const Field = memo(({ className, children, label, error }: TFieldProps) => { 
	return <label className={clsx(styles.container, className)} data-testid="Field">
		{label && <span className={styles.label}>{label}</span>}
		{children}
    {error && <span className={styles.error}>{error}</span>}
	</label>;
}
)