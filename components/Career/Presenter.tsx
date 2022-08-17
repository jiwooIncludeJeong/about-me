import type { RefObject } from 'react';
import React from 'react';
import styled from 'styled-components';
import { Col, Container } from '@styles/default-styles';
import CareerItem from '@components/Career/CareerItemsArea/CareerItem';
import type { CareerItemType } from '@interfaces/Career';
import SectionTitle from '@components/UI/SectionTitle';
import CareerItemsArea from '@components/Career/CareerItemsArea';

interface Props {
  divRef: RefObject<HTMLDivElement>;
  items: Array<CareerItemType>;
  selectedIndex: number;
  isFocused: boolean;
}

const Presenter: React.FC<Props> = props => {
  const { divRef, items, selectedIndex, isFocused } = props;
  return (
    <Wrapper ref={divRef}>
      <SectionTitle isFocused={isFocused} content={'CAREER'} />
      <CareerItemsArea
        items={items}
        isFocused={isFocused}
        selectedIndex={selectedIndex}
      />
    </Wrapper>
  );
};

const Wrapper = styled(Container)`
  justify-content: center;
  align-items: center;
`;

export default Presenter;
