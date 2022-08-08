import type { RefObject } from 'react';
import React from 'react';
import styled from 'styled-components';
import { Container } from '@styles/default-styles';
import Color from '@assets/color';
import Typo from '@components/UI/Typo/Typo';
import { Span } from '@components/UI/Span/Span';

interface Props {
  divRef: RefObject<HTMLDivElement>;
}

const Presenter: React.FC<Props> = props => {
  const { divRef } = props;
  return (
    <Wrapper ref={divRef}>
      <Typo fontType={'KR/Heading/L/Regular'} color={Color.white}>
        저는 <Span fontWeight={700}>정지우</Span>입니다.
        <br />
        반복되는 것들의 규칙을 찾아
        <br />
        효율적인 흐름을 만드는 것을 좋아합니다.
      </Typo>
    </Wrapper>
  );
};

const Wrapper = styled(Container)`
  height: 100vh;
  padding-top: 160px;
  justify-content: flex-start;
  align-items: flex-start;
`;

export default Presenter;
