import React from 'react';
import type { HeaderMenuItemType } from '@interfaces/Layout/Header';
import styled from 'styled-components';
import { Row, Btn } from '@styles/default-styles';
import Item from '@components/Layout/Header/Menu/Item';
import useWindowSize from '@hooks/useWindowSize';
import { HamburgerIcon } from '@assets/icons';
import Opened from '@components/Layout/Header/Menu/Opened';
import Color from '@assets/color';
import type { MenuListEnum } from '@enums/Layout/header';

interface Props {
  items: Array<HeaderMenuItemType>;
  isMenuOpened: boolean;
  onClickMenu: () => void;
  isTopReached: boolean;
  selectedMenu: MenuListEnum;
}

const Presenter: React.FC<Props> = props => {
  const { items, onClickMenu, isMenuOpened, isTopReached, selectedMenu } =
    props;

  const { isTablet } = useWindowSize();
  return isTablet ? (
    <React.Fragment>
      <Btn onClick={onClickMenu}>
        <HamburgerIcon width={24} height={24} />
      </Btn>
      <Opened
        items={items}
        isMenuOpened={isMenuOpened}
        onClickMenu={onClickMenu}
      />
    </React.Fragment>
  ) : (
    <Wrapper isTopReached={isTopReached}>
      {items.map(item => (
        <Item
          key={item.title}
          title={item.title}
          isSelected={item.title === selectedMenu}
          onClick={item.onClick}
        />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled(Row)<{ isTopReached: boolean }>`
  width: unset;
  align-items: center;

  p {
    color: ${props => (props.isTopReached ? Color.black : Color.white)};
    :hover {
      text-decoration: underline 1px solid
        ${props => (props.isTopReached ? Color.black : Color.white)};
    }
  }
`;

export default Presenter;
