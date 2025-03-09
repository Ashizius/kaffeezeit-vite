import { PropsWithChildren, useCallback } from 'react';
import { PageChangerContext } from './PageChangerContext';
import { TPageChanger } from './types';

export function PageChangerContextProvider({
	children,
	value,
}: PropsWithChildren<{ value: TPageChanger }>) {
	return (
		<PageChangerContext.Provider value={value}>
			{children}
		</PageChangerContext.Provider>
	);
}
