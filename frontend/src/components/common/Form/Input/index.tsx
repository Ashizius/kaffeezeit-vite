import { withInput } from "./Input";
import { TInputProps } from "./types";


export const Input = (props: TInputProps) =>
  withInput({ ...props});

export const InputText = (props: TInputProps) =>
  withInput({ ...props, type: 'text' });

export const InputEmail = (props: TInputProps) =>
  withInput({ ...props, type: 'email' });

export const InputPassword = (props: TInputProps) =>
  withInput({ ...props, type: 'password' });
