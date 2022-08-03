import React from 'react';
import styled from 'styled-components';
import Typo from '@components/UI/Typo/Typo';
import { Col, Row } from '@styles/default-styles';
import Menu from '@components/Layout/Header/Menu';
import Color from '@assets/color';

interface Props {}

const Presenter: React.FC<Props> = props => {
  const {} = props;
  return (
    <Wrapper>
      <Menu />
      <Center>
        <Typo fontType={'KR/Heading/M/Bold'} color={Color.black}>
          INCLUDE : JEONG JI WOO
        </Typo>
      </Center>
    </Wrapper>
  );
};

const Wrapper = styled(Row)`
  position: fixed;
  top: 0;
  width: 100vw;
  padding: 24px;
  background-color: white;
`;

const Center = styled(Col)`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%) translateY(50%);
`;

export default Presenter;
