import { PropsWithChildren, ReactElement } from 'react';
import { TAnchorHref } from '@components/common/Anchor/types';

export type TMenuItem = {
  content: string;
  action: TAnchorHref;
}

export type TMenuItemElement = TMenuItem & {
  id?: string;
  customElement?: (props: TMenuItemElement)=>ReactElement
  className?:string;
}

export type TMenuProps = {
	className?: string;
  listClassName?: string;
  itemsClassName?: string;
  items: TMenuItemElement[];
  type?: 'button'|'link';
  defaultElement?: (props: TMenuItemElement)=>ReactElement;
  override?: boolean;
};
