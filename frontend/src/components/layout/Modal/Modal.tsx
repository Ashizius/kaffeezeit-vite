import clsx from 'clsx';
import { PropsWithChildren, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import styles from './Modal.module.scss';

export type ModalProps = PropsWithChildren<{
	title?: string;
	onClose?: () => void;
	className?: string;
}>;

const modalRoot = document.getElementById('modal');

export function Modal({
	className,
	children,
	title,
	onClose,
}: PropsWithChildren<ModalProps>) {
	const overlayRef = useRef<HTMLDivElement>(null);
	useEffect(() => {
		const overlayElement = overlayRef.current;
		const handleEscape = (e: KeyboardEvent) => {
			if (e.key === 'Escape') {
				onClose?.();
			}
		};

		const handleOverlayClick = (e: MouseEvent) => {
			if (e.target === overlayElement) {
				onClose?.();
			}
		};

		document.addEventListener('keydown', handleEscape);
		overlayElement?.addEventListener('click', handleOverlayClick);
		return () => {
			document.removeEventListener('keydown', handleEscape);
			overlayElement?.removeEventListener('click', handleOverlayClick);
		};
	}, [onClose, overlayRef]);

	return ReactDOM.createPortal(
		<div ref={overlayRef} className={clsx(styles.overlay, styles.hidden)}>
			<div className={clsx(styles.container, className)} data-testid="Modal">
				<h3 className={clsx(styles.title)}>{title}</h3>
				<button
					type="button"
					className={clsx(styles.button)}
					onClick={onClose}
				></button>
				<div className={clsx(styles.content)}>{children}</div>
			</div>
		</div>,
		modalRoot!
	);
}
