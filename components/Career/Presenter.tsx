import type { RefObject } from 'react';
import React from 'react';
import styled from 'styled-components';
import { Col, Container } from '@styles/default-styles';
import Color from '@assets/color';
import Typo from '@components/UI/Typo/Typo';
import CareerItem from '@components/Career/CareerItem';
import type { CareerItemType } from '@interfaces/Career';

interface Props {
  divRef: RefObject<HTMLDivElement>;
  items: Array<CareerItemType>;
  selectedIndex: number;
}

const Presenter: React.FC<Props> = props => {
  const { divRef, items, selectedIndex } = props;
  return (
    <Wrapper ref={divRef}>
      <Title>
        <Typo fontType={'EN/Heading/M/Bold'} color={Color.white}>
          CAREER
        </Typo>
      </Title>
      <CareerItemWrapper>
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

const Title = styled.div`
  margin-bottom: 24px;
`;

const CareerItemWrapper = styled(Col)`
  padding: 0 400px;
  width: 100%;

  @media only screen and ${props => props.theme.maxGrid2} {
    padding: 0 40px;
  }
`;

export default Presenter;
