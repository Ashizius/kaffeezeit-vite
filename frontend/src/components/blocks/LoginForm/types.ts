import { PropsWithChildren } from 'react';

export type TloginFormData = { email: string; password: string };
export type TloginFormErrors = Record<keyof TloginFormData, string>;

export type TLoginFormProps = PropsWithChildren<{
	className?: string;
  data: TloginFormData;
  loadError?: string;
  loading: boolean;
}>;
