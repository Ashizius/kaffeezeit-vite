import { PropsWithChildren } from 'react';


export type TModalProps = PropsWithChildren<{
	title?: string;
	onClose?: () => void;
	className?: string;
}>;