import clsx from 'clsx';
import { useCallback, useEffect, useLayoutEffect, useRef } from 'react';
import styles from './Modal.module.scss';
import { TModalProps } from './types';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';

export function ModalLayout({
	className,
	children,
	title,
	onClose,
	redirect,
}: TModalProps) {
	const overlayRef = useRef<HTMLDivElement>(null);
	const modalRef = useRef<HTMLDivElement>(null);
	const navigate = useNavigate();
	const location = useLocation();

	const closeModal = useCallback(() => {
    console.log('location=', location);
		console.log(location.state);
    console.log('location.state?.backgroundLocation==',location.state?.backgroundLocation);
		navigate(location.state?.backgroundLocation || '..', {
			state: {...location.state},
		});
	}, []);
	useEffect(() => {
		const overlayElement = overlayRef.current;
		const handleEscape = (e: KeyboardEvent) => {
			if (e.key === 'Escape') {
				onClose?.();
				closeModal();
			}
		};

		const handleOverlayClick = (e: MouseEvent) => {
			if (e.target === overlayElement) {
				onClose?.();
				closeModal();
			}
		};
    console.log(
			'location.state?.backgroundLocation',
			location.state?.backgroundLocation
		);
		if (!location.state?.backgroundLocation) {
			navigate(redirect || '/');
		}
		document.addEventListener('keydown', handleEscape);
		overlayElement?.addEventListener('click', handleOverlayClick);
		return () => {
			document.removeEventListener('keydown', handleEscape);
			overlayElement?.removeEventListener('click', handleOverlayClick);
		};

	}, [onClose, overlayRef]);

	return (
		<>
			{/*!location.state?.backgroundLocation&&<Navigate to={redirect||'/'}/>*/}
			<div ref={overlayRef} className={clsx(styles.overlay)} id="modal">
				{' '}
			</div>
			<div
				ref={modalRef}
				className={clsx(styles.modal, className)}
				data-testid="Modal"
			>
				<h3 className={clsx(styles.title)}>{title}</h3>
				<button
					type="button"
					className={clsx(styles.button)}
					onClick={() => {
						onClose?.();
						closeModal();
					}}
				>
					X
				</button>
				<div className={clsx(styles.content)}>{children}</div>
			</div>
		</>
	);
}
