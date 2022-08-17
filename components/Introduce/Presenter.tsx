import type { RefObject } from 'react';
import React from 'react';
import styled from 'styled-components';
import { Container } from '@styles/default-styles';
import DarkColor from '@assets/darkColor';
import Typo from '@components/UI/Typo/Typo';
import { Span } from '@components/UI/Span/Span';

interface Props {
  divRef: RefObject<HTMLDivElement>;
  isFocused: boolean;
}

const Presenter: React.FC<Props> = props => {
  const { divRef, isFocused } = props;
  return (
    <Wrapper ref={divRef}>
      <TypoWrapper isFocused={isFocused}>
        <Typo fontType={'KR/Heading/L/Regular'} color={DarkColor.white}>
          저는 <SpanWithUnderline fontWeight={700}>정지우</SpanWithUnderline>
          입니다.
          <br />
          <Span fontWeight={200}>
            반복되는 것들의 규칙을 찾아
            <br />
            효율적인 흐름을 만드는
            <br />
            프론트엔드 개발자 입니다.
          </Span>
        </Typo>
      </TypoWrapper>
    </Wrapper>
  );
};

const Wrapper = styled(Container)`
  padding-top: 160px;
  justify-content: flex-start;
  align-items: flex-start;

  p {
    word-break: break-all;
    color: ${({ theme }) => theme.color.white};
  }
`;
const SpanWithUnderline = styled(Span)`
  text-decoration: underline 2px solid #f81857;
  position: relative;
`;
const TypoWrapper = styled.div<{ isFocused: boolean }>`
  opacity: ${({ isFocused }) => (isFocused ? 1 : 0)};
  transform: translateY(${({ isFocused }) => (isFocused ? 0 : '-200px')});
  transition: opacity ease-in-out 200ms, transform ease 400ms;
`;
export default Presenter;
