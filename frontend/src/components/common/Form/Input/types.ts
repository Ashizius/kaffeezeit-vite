import { InputHTMLAttributes } from "react";

export type TInputProps<K=string,V=string> = {
	className?: string;
	value?: string;
	onChange?: (name:K, value: V) => void;
  name: K;
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'>;

