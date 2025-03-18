import clsx from "clsx";
import { TFieldProps } from "./types";
import styles from './Field.module.scss';

export function Field({ className, children, label, error }: TFieldProps) {
	return <label className={clsx(styles.container, className)} data-testid="Field">
		{label && <span className={styles.label}>{label}</span>}
		{children}
    {error && <span className={styles.error}>{error}</span>}
	</label>;
}
