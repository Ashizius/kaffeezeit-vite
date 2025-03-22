import { createContext } from 'react';
import { TPageChanger } from './types';

export const PageChangerContext = createContext<TPageChanger>({
	changer: () => null
});
