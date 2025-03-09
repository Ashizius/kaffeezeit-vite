import {  TAnchorProps } from './types';

import { useAnchor } from './hooks';

	export function Anchor({href, ...otherProps}: TAnchorProps) {
    const [Tag, anchorProps]=useAnchor(href);
		return (
      <Tag {...otherProps} {...anchorProps} data-testid="Anchor"></Tag>
		);
	};
