import React from 'react';
import styled from 'styled-components';
import { Row } from '@styles/default-styles';
import Typo from '@components/UI/Typo/Typo';
import DarkColor from '@assets/darkColor';

interface Props {
  title: string;
  img: string;
}

const TechItem: React.FC<Props> = props => {
  const { title, img } = props;
  return (
    <Wrapper>
      <Typo fontType={'EN/Button/XS/Medium'} color={DarkColor.black}>
        {title}
      </Typo>
    </Wrapper>
  );
};

const Wrapper = styled(Row)`
  padding: 10px 12px;
  background-color: ${({ theme }) => `${theme.color.orange}99`};
  border-radius: 4px;
  margin-right: 12px;

  :last-child {
    margin-right: 0;
  }

  :hover {
    transition: background-color 200ms ease-in-out;
    background-color: ${({ theme }) => `${theme.color.orange}`};
  }

  p {
    color: ${({ theme }) => theme.color.white};
    white-space: nowrap;
  }
`;

export default TechItem;
