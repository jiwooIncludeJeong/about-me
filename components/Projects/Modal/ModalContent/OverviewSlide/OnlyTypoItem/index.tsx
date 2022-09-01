import React from 'react';
import styled from 'styled-components';
import Typo from '@components/UI/Typo/Typo';
import DarkColor from '@assets/darkColor';

interface Props {
  content: string;
}

const OnlyTypoItem: React.FC<Props> = props => {
  const { content } = props;
  return (
    <Wrapper>
      <Typo fontType={'KR/Body/M/Regular'} color={DarkColor.black}>
        {content}
      </Typo>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  p {
    color: ${({ theme }) => theme.color.black};
  }
`;

export default OnlyTypoItem;
