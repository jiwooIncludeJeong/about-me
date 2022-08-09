import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Row } from '@styles/default-styles';
import Color from '@assets/color';
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
        <Typo
          fontType={isTablet ? 'KR/Body/S/Medium' : 'KR/Body/L/Medium'}
          color={Color.white}
        >
          {duration}
        </Typo>
      </Duration>
      <Content>
        <Typo
          fontType={isTablet ? 'KR/Body/S/Medium' : 'KR/Body/L/Medium'}
          color={Color.white}
        >
          {content}
        </Typo>
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled(Row)<{ isSelected: boolean }>`
  border-left: 4px solid ${Color.dimgray_m3};
  position: relative;
  align-items: center;
  justify-content: flex-start;
  height: 80px;
  overflow: visible;

  ::after {
    content: '';
    width: 16px;
    height: 16px;
    background-color: ${Color.black};
    border: 4px solid ${Color.dimgray_m3};
    border-radius: 100%;
    position: absolute;
    left: -14px;
    top: 50%;
    transform: translateY(-50%);
  }
`;
const Duration = styled.div`
  width: 50%;
  margin-left: 20px;
`;
const Content = styled.div`
  width: 50%;
`;
export default CareerItem;
