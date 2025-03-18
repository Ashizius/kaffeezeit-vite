import { createContext, PropsWithChildren } from 'react';
import {
  TFormContext,
  TFormContextProvider,
  TFormElement,
} from './types';
import { Link } from 'react-router-dom';

export const FormContext = createContext<TFormContext>({
	FormElement: 'form',
});

export function FormContextProvider({
	children,
	FormElement,
}: PropsWithChildren<TFormContextProvider>) {
	return (
		<FormContext.Provider value={{ FormElement }}>
			{children}
		</FormContext.Provider>
	);
}
