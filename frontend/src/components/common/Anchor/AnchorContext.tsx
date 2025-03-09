import { createContext, PropsWithChildren } from 'react';
import {
	TAnchorContext,
	TAnchorContextProvider,
	TAnchorElement,
	TAnchorProps,
} from './types';
import { Link } from 'react-router-dom';

export const AnchorContext = createContext<TAnchorContext>({
	LinkElement: 'a',
});

export function AnchorContextProvider({
	children,
	LinkElement,
}: PropsWithChildren<TAnchorContextProvider>) {
	let AnchorElement: TAnchorElement = 'a';
	if (LinkElement === Link) {
		AnchorElement = function (AnchorElementProps: TAnchorProps) {
			let { href, to, ...props } = AnchorElementProps;
			if (typeof href === 'function' || !href) {
				href = '';
			}
			return <Link to={to === undefined ? href : to} {...props} />;
		};
	}
	return (
		<AnchorContext.Provider value={{ LinkElement: AnchorElement }}>
			{children}
		</AnchorContext.Provider>
	);
}
