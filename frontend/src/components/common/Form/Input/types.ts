import { InputHTMLAttributes } from "react";

export type TInputProps<T=string> = {
	className?: string;
	value?: string;
	onChange?: (value: T) => void;
} & InputHTMLAttributes<HTMLInputElement>;

