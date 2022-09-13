import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Row } from '@styles/default-styles';
import DarkColor from '@assets/darkColor';
import Typo from '@components/UI/Typo/Typo';
import useWindowSize from '@hooks/useWindowSize';

interface Props {
  duration: string;
  content: string;
  isSelected: boolean;
}

const CareerItem: React.FC<Props> = props => {
  const { duration, content, isSelected } = props;

  const { isTablet } = useWindowSize();

  return (
    <Wrapper isSelected={isSelected}>
      <Duration>
        <VerticalItem />
        <Typo
          fontType={isTablet ? 'KR/Body/S/Medium' : 'KR/Body/L/Medium'}
          color={DarkColor.white}
        >
          {duration}
        </Typo>
      </Duration>
      <Content>
        <Typo
          fontType={isTablet ? 'KR/Body/S/Medium' : 'KR/Body/L/Medium'}
          color={DarkColor.white}
        >
          {content}
        </Typo>
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled(Row)<{ isSelected: boolean }>`
  align-items: center;
  justify-content: space-between;
  p {
    color: ${({ theme }) => theme.color.white};
  }
`;
const VerticalItem = styled.div`
  position: relative;
  border-left: 4px solid ${({ theme }) => theme.color.white};
  align-items: center;
  height: 80px;
  margin-right: 20px;
  overflow: visible;
  ::after {
    content: '';
    width: 16px;
    height: 16px;
    background-color: ${({ theme }) => theme.color.black};
    border: 4px solid ${({ theme }) => theme.color.white};
    border-radius: 100%;
    position: absolute;
    left: -14px;
    top: 50%;
    transform: translateY(-50%);
  }
`;
const Duration = styled(Row)`
  margin: 0 20px 0 80px;
  align-items: center;
  width: unset;

  @media only screen and ${({ theme }) => theme.maxGrid2} {
    margin: 0 20px;
  }
`;
const Content = styled(Row)`
  width: unset;
  margin-right: 60px;
`;
export default CareerItem;
