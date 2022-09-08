import React from 'react';
import styled from 'styled-components';
import Typo from '@components/UI/Typo/Typo';
import DarkColor from '@assets/darkColor';
import useWindowSize from '@hooks/useWindowSize';

interface Props {
  content: string;
}

const OnlyTypoItem: React.FC<Props> = props => {
  const { content } = props;
  const { isTablet } = useWindowSize();
  return (
    <Wrapper>
      <Typo
        fontType={isTablet ? 'KR/Body/S/Medium' : 'KR/Body/M/Regular'}
        color={DarkColor.black}
      >
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
