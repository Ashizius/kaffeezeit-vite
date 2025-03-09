import { useContext, MouseEvent, useState } from 'react';
import {
	TAnchorElement,
	TAnchorHref,
	TAnchorHTMLProps
} from './types';
import { AnchorContext } from './AnchorContext';

export function useAnchor(
	href?: TAnchorHref
): [TAnchorElement, TAnchorHTMLProps] {
	let { LinkElement } = useContext(AnchorContext);
	LinkElement = LinkElement || 'a';
	const props: TAnchorHTMLProps = {};
	switch (true) {
		case typeof href === 'string':
			props.href = href;
			break;
		case typeof href === 'object':
			props.href = href.pathname;
      props.to = href;
			break;
		case typeof href === 'function':
			props.href = undefined;
			props.onClick = (event: MouseEvent<HTMLAnchorElement>) => {
				event.preventDefault();
				event.stopPropagation();
				href(event);
			};
			break;
	}
	return [LinkElement, props];
}
