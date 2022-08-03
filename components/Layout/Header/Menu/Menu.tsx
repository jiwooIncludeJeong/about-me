import React from 'react';
import Presenter from '@components/Layout/Header/Menu/Presenter';
import type { HeaderMenuItemType } from '@interfaces/Layout/Header';

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

  return <Presenter items={items} />;
};

export default Menu;
