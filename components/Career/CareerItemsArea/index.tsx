import React from 'react';
import CareerItem from '@components/Career/CareerItemsArea/CareerItem';
import type { CareerItemType } from '@interfaces/Career';
import styled from 'styled-components';
import { Col } from '@styles/default-styles';

interface Props {
  items: Array<CareerItemType>;
  isFocused: boolean;
  selectedIndex: number;
}

const CareerItemsArea: React.FC<Props> = props => {
  const { isFocused, items, selectedIndex } = props;
  return (
    <CareerItemWrapper isFocused={isFocused}>
      {items.map((value, index) => (
        <CareerItem
          key={value.id}
          duration={value.duration}
          content={value.content}
          isSelected={index >= selectedIndex}
        />
      ))}
    </CareerItemWrapper>
  );
};
const CareerItemWrapper = styled(Col)<{ isFocused: boolean }>`
  padding: 0 500px;
  width: 100%;
  opacity: ${({ isFocused }) => (isFocused ? 1 : 0)};
  transform: translateY(${({ isFocused }) => (isFocused ? 0 : '200px')});
  transition: opacity 200ms ease, transform 200ms ease;

  @media only screen and ${props => props.theme.maxGrid2} {
    padding: 0 40px;
  }
`;

export default CareerItemsArea;
