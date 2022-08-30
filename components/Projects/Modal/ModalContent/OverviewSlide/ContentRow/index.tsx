import React from 'react';
import styled from 'styled-components';
import { Row } from '@styles/default-styles';
import DarkColor from '@assets/darkColor';
import Typo from '@components/UI/Typo/Typo';

interface Props {
  render: () => React.ReactNode;
  title: string;
}

const ContentRow: React.FC<Props> = props => {
  const { title, render } = props;
  return (
    <Wrapper>
      <Title>
        <Typo fontType={'EN/Body/L/Bold'} color={DarkColor.black}>
          {title}
        </Typo>
      </Title>
      {render()}
    </Wrapper>
  );
};
const Wrapper = styled(Row)`
  align-items: center;
  width: unset;
  margin-bottom: 12px;

  :last-child {
    margin-bottom: 0;
  }

  > p {
    color: ${({ theme }) => theme.color.black};
  }
`;
const Title = styled(Row)`
  width: unset;
  margin-right: 30px;
`;
export default ContentRow;
