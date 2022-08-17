import React from 'react';
import styled from 'styled-components';
import Typo from '@components/UI/Typo/Typo';
import DarkColor from '@assets/darkColor';

interface Props {
  isFocused: boolean;
  content: string;
}

const SectionTitle: React.FC<Props> = props => {
  const { isFocused, content } = props;
  return (
    <Title isFocused={isFocused}>
      <Typo fontType={'MG/Heading/L/Bold'} color={DarkColor.white}>
        {content}
      </Typo>
    </Title>
  );
};
const Title = styled.div<{ isFocused: boolean }>`
  margin-bottom: 24px;
  opacity: ${({ isFocused }) => (isFocused ? 1 : 0)};
  transform: translateY(${({ isFocused }) => (isFocused ? 0 : '200px')});
  transition: opacity 200ms ease, transform 200ms ease;

  p {
    color: ${({ theme }) => theme.color.white};
  }
`;
export default SectionTitle;
