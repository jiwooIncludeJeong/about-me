import { atom } from 'recoil';
import { MenuListEnum } from '@enums/Layout/header';

export const isTopReachedAtom = atom<boolean>({
  default: true,
  key: 'isTopReachedAtom',
});

export const selectedMenuAtom = atom<MenuListEnum>({
  default: MenuListEnum.INTRODUCE,
  key: 'selectedMenuAtom',
});
