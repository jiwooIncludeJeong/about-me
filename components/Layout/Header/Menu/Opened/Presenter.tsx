import React from 'react';
import styled from 'styled-components';
import { Col, Row, Btn } from '@styles/default-styles';
import Color from '@assets/color';
import type { HeaderMenuItemType } from '@interfaces/Layout/Header';
import Item from '@components/Layout/Header/Menu/Item';
import { XIcon } from '@assets/icons';

interface Props {
  items: Array<HeaderMenuItemType>;
  isMenuOpened: boolean;
  onClickMenu: () => void;
}

const Presenter: React.FC<Props> = props => {
  const { isMenuOpened, onClickMenu, items } = props;
  return (
    <React.Fragment>
      <Wrapper
        onClick={() => isMenuOpened && onClickMenu()}
        isMenuOpened={isMenuOpened}
      />
      <MenuArea isMenuOpened={isMenuOpened}>
        <Row justifyContent={'flex-end'}>
          <Btn onClick={() => isMenuOpened && onClickMenu()}>
            <XIcon width={16} height={16} />
          </Btn>
        </Row>
        <MenuListWrapper>
          {items.map(item => (
            <Item
              key={item.title}
              title={item.title}
              isSelected={false}
              onClick={item.onClick}
            />
          ))}
        </MenuListWrapper>
      </MenuArea>
    </React.Fragment>
  );
};

const Wrapper = styled.div<{ isMenuOpened: boolean }>`
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 0;
  left: 0;
  opacity: ${props => (props.isMenuOpened ? 1 : 0)};
  transition: opacity 200ms ease;
  z-index: ${props => (props.isMenuOpened ? 1 : -2)};
`;

const MenuArea = styled(Col)<{ isMenuOpened: boolean }>`
  width: 60vw;
  height: 100vh;
  background-color: ${Color.white};
  position: absolute;
  top: 0;
  right: 0;
  z-index: 2;
  transform: translateX(${props => (props.isMenuOpened ? '0' : '60vw')});
  transition: transform 200ms ease;
  padding: 12px 18px;
`;
const MenuListWrapper = styled(Col)`
  width: 100%;
  margin-top: 12px;
  border-top: 1px solid ${Color.dimgray_m3};

  div {
    padding: 12px;
    width: 100%;
    justify-content: left;
  }
`;

export default Presenter;
