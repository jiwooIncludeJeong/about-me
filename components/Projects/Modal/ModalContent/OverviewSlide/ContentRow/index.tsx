import React from 'react';
import styled from 'styled-components';
import { Row } from '@styles/default-styles';
import DarkColor from '@assets/darkColor';
import Typo from '@components/UI/Typo/Typo';
import useWindowSize from '@hooks/useWindowSize';

interface Props {
  render: () => React.ReactNode;
  title: string;
  alignItems?: 'flex-start' | 'center' | 'flex-end' | 'unset';
}

const ContentRow: React.FC<Props> = props => {
  const { title, render, alignItems } = props;

  const { isTablet } = useWindowSize();

  return (
    <Wrapper alignItems={alignItems ?? 'center'}>
      <Title>
        <Typo
          fontType={isTablet ? 'EN/Body/S/Bold' : 'EN/Body/L/Bold'}
          color={DarkColor.black}
        >
          {title}
        </Typo>
      </Title>
      <Render>{render()}</Render>
    </Wrapper>
  );
};
const Wrapper = styled(Row)`
  width: unset;
  margin-bottom: 12px;

  :last-child {
    margin-bottom: 0;
  }
`;
const Title = styled(Row)`
  width: unset;
  margin-right: 30px;
  min-width: 80px;
  > p {
    color: ${({ theme }) => theme.color.black};
  }
`;
const Render = styled(Row)`
  width: unset;
  flex-wrap: wrap;
  box-sizing: border-box;
`;
export default ContentRow;
