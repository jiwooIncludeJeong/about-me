import type { RefObject } from 'react';
import React from 'react';
import styled from 'styled-components';
import { Col, Container } from '@styles/default-styles';
import DarkColor from '@assets/darkColor';
import Typo from '@components/UI/Typo/Typo';
import CareerItem from '@components/Career/CareerItem';
import type { CareerItemType } from '@interfaces/Career';

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
      <Title isFocused={isFocused}>
        <Typo fontType={'MG/Heading/L/Bold'} color={DarkColor.white}>
          CAREER
        </Typo>
      </Title>
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
    </Wrapper>
  );
};

const Wrapper = styled(Container)`
  justify-content: center;
  align-items: center;
`;

const Title = styled.div<{ isFocused: boolean }>`
  margin-bottom: 24px;
  opacity: ${({ isFocused }) => (isFocused ? 1 : 0)};
  transform: translateY(${({ isFocused }) => (isFocused ? 0 : '200px')});
  transition: opacity 200ms ease, transform 200ms ease;

  p {
    color: ${({ theme }) => theme.color.white};
  }
`;

const CareerItemWrapper = styled(Col)<{ isFocused: boolean }>`
  padding: 0 400px;
  width: 100%;
  opacity: ${({ isFocused }) => (isFocused ? 1 : 0)};
  transform: translateY(${({ isFocused }) => (isFocused ? 0 : '200px')});
  transition: opacity 200ms ease, transform 200ms ease;

  @media only screen and ${props => props.theme.maxGrid2} {
    padding: 0 40px;
  }
`;

export default Presenter;
