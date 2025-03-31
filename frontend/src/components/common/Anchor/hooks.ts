import { useContext, MouseEvent, useState } from 'react';
import { TAnchorElement, TAnchorHref, TAnchorHTMLProps } from './types';
import { AnchorContext } from './AnchorContext';
import { useLocation } from 'react-router-dom';

export function useAnchor(
	to?: TAnchorHref, state?:object
): [TAnchorElement, TAnchorHTMLProps] {
	let { LinkElement } = useContext(AnchorContext);
	LinkElement = LinkElement || 'a';
	const props: TAnchorHTMLProps = {};
  const location = useLocation();
	switch (true) {
		case typeof to === 'string':
			if (LinkElement === 'a') {
				props.href = to;
			} else {
				props.to = to;
        props.state = {...state,backgroundLocation:location.pathname}
			}
			break;
		case typeof to === 'object':
			if (LinkElement === 'a') {
				props.href = to.pathname;
				props.href = undefined;
			} else {
				props.to = to;
        props.state = {...state,backgroundLocation:location.pathname}
			}
			break;
		case typeof to === 'function':
			props.href = undefined;
			props.onClick = (event: MouseEvent<HTMLAnchorElement>) => {
				event.preventDefault();
				event.stopPropagation();
				to(event);
			};
			break;
	}
  console.log(props);
	return [LinkElement, props];
}
