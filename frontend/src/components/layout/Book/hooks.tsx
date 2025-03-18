import React, {
	ReactNode,
	useCallback,
	useEffect,
	useLayoutEffect,
	useRef,
} from 'react';

export function usePreviousClone(node: ReactNode, deps: any[]) {
	const ref = useRef<null | HTMLDivElement>(null);
	const newRef = useRef<null | HTMLDivElement>(null);
	const catchComponent = useCallback(() => {
		if (ref.current) {
			newRef.current?.append(ref.current?.cloneNode(true) || '');
		}
		ref.current = null;
	}, deps);
	return {
		current: <section ref={ref}>{node}</section>,
		old: <section ref={newRef}></section>,
		catchComponent,
	};
}
