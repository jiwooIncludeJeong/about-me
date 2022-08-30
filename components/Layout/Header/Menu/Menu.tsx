import React, { useEffect, useState } from 'react';
import Presenter from '@components/Layout/Header/Menu/Presenter';
import type { HeaderMenuItemType } from '@interfaces/Layout/Header';
import useScrollLock from '@hooks/useScrollLock';
import { useRecoilValue } from 'recoil';
import {
  isTopReachedAtom,
  selectedMenuAtom,
} from '@recoils/atoms/Layout/header';
import { MenuListEnum } from '@enums/Layout/header';
import {
  CAREER_SCROLL_Y,
  INTRODUCE_SCROLL_Y,
  PROJECTS_SCROLL_Y,
} from '@constants/scroll';

interface Props {}

const Menu: React.FC<Props> = props => {
  const {} = props;

  const selectedMenu = useRecoilValue(selectedMenuAtom);

  const [items, setItems] = useState<Array<HeaderMenuItemType>>([
    {
      title: MenuListEnum.INTRODUCE,
      onClick: () => {
        window.scrollTo({ top: INTRODUCE_SCROLL_Y, behavior: 'smooth' });
        setIsMenuOpened(false);
      },
    },
    {
      title: MenuListEnum.CAREER,
      onClick: () => {
        window.scrollTo({ top: CAREER_SCROLL_Y, behavior: 'smooth' });
        setIsMenuOpened(false);
      },
    },
    {
      title: MenuListEnum.PROJECTS,
      onClick: () => {
        window.scrollTo({ top: PROJECTS_SCROLL_Y, behavior: 'smooth' });
        setIsMenuOpened(false);
      },
    },
  ]);

  const [isMenuOpened, setIsMenuOpened] = useState<boolean>(false);
  const isTopReached = useRecoilValue(isTopReachedAtom);

  useScrollLock(isMenuOpened);

  const onClickMenu = () => {
    setIsMenuOpened(prevState => !prevState);
  };

  return (
    <Presenter
      items={items}
      isMenuOpened={isMenuOpened}
      onClickMenu={onClickMenu}
      isTopReached={isTopReached}
      selectedMenu={selectedMenu}
    />
  );
};

export default Menu;
