import type { RefObject } from 'react';
import React from 'react';
import styled from 'styled-components';
import { Container } from '@styles/default-styles';
import Typo from '@components/UI/Typo/Typo';
import Color from '@assets/color';

interface Props {
  divRef: RefObject<HTMLDivElement>;
}

const Presenter: React.FC<Props> = props => {
  const { divRef } = props;
  return (
    <Wrapper ref={divRef}>
      <Typo fontType={'KR/Body/L/Bold'} color={Color.white}>
        TBD: PROJECTS
      </Typo>
    </Wrapper>
  );
};

const Wrapper = styled(Container)`
  height: 100vh;
  background-color: #0070f3;
  justify-content: center;
  align-items: center;
`;

export default Presenter;
