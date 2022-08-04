import React from 'react';
import type { HeaderMenuItemType } from '@interfaces/Layout/Header';
import Presenter from '@components/Layout/Header/Menu/Opened/Presenter';

interface Props {
  items: Array<HeaderMenuItemType>;
  isMenuOpened: boolean;
  onClickMenu: () => void;
}

const Opened: React.FC<Props> = props => {
  const {} = props;

  return <Presenter {...props} />;
};

export default Opened;
