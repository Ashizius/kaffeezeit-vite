import { JSX, memo } from "react";
import { withInput } from "./Input";
import { TInputProps } from "./types";


type inputMemo<K=string> = React.MemoExoticComponent<(props: TInputProps<K>) => JSX.Element>
type inputMemoWithName<K=string> = React.MemoExoticComponent<(props: Omit<TInputProps<K>,'name'>) => JSX.Element>


export const Input:inputMemo = memo((props) =>
  withInput({ ...props}));

export const InputText:inputMemo = memo((props) =>
  withInput({ ...props, type: 'text'}));

export const InputEmail:inputMemoWithName<'email'> = memo((props) =>
  withInput({ ...props, type: 'email', name:'email' }));

export const InputPassword:inputMemoWithName<'password'> = memo((props) =>
  withInput({ ...props, type: 'password', name:'password' }));

export const InputPasswordConfirm:inputMemoWithName<'confirmPassword'> = memo((props) =>
  withInput({ ...props, type: 'password', name:'confirmPassword' }));



