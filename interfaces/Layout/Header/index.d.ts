import type { MenuListEnum } from '@enums/Layout/header';

export interface HeaderMenuItemType {
  title: MenuListEnum;
  onClick: () => void;
}
