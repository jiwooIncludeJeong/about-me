import React, { useState } from 'react';
import Presenter from '@components/Layout/Header/Menu/Presenter';
import type { HeaderMenuItemType } from '@interfaces/Layout/Header';
import useScrollLock from '@hooks/useScrollLock';
import { useRecoilValue } from 'recoil';
import { isTopReachedAtom } from '@recoils/atoms/Layout/header';

interface Props {}

const Menu: React.FC<Props> = props => {
  const {} = props;

  const items: Array<HeaderMenuItemType> = [
    {
      title: 'INTRODUCE',
      isSelected: false,
      onClick: () => {},
    },
    { title: 'CAREER', isSelected: false, onClick: () => {} },
    { title: 'PROJECTS', isSelected: false, onClick: () => {} },
  ];

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
    />
  );
};

export default Menu;
