import React from 'react';
import type { HeaderMenuItemType } from '@interfaces/Layout/Header';
import styled from 'styled-components';
import { Row } from '@styles/default-styles';
import Item from '@components/Layout/Header/Menu/Item';

interface Props {
  items: Array<HeaderMenuItemType>;
}

const Presenter: React.FC<Props> = props => {
  const { items } = props;
  return (
    <Wrapper>
      {items.map(item => (
        <Item
          title={item.title}
          isSelected={item.isSelected}
          onClick={item.onClick}
        />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled(Row)`
  width: unset;
  align-items: center;
`;

export default Presenter;
