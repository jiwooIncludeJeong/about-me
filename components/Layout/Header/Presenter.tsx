import React from 'react';
import styled from 'styled-components';
import Typo from '@components/UI/Typo/Typo';
import { Col } from '@styles/default-styles';
import Menu from '@components/Layout/Header/Menu';
import Color from '@assets/color';
import useWindowSize from '@hooks/useWindowSize';

interface Props {
  isTopReached: boolean;
}

const Presenter: React.FC<Props> = props => {
  const { isTopReached } = props;

  const { isTablet } = useWindowSize();

  return (
    <Wrapper isTopReached={isTopReached}>
      <Menu />
      <Center>
        <Typo
          fontType={isTablet ? 'KR/Heading/S/Black' : 'KR/Heading/XL/Black'}
          color={isTopReached ? Color.black : Color.white}
        >
          INCLUDE : JEONG JI WOO
        </Typo>
      </Center>
    </Wrapper>
  );
};

const Wrapper = styled.div<{ isTopReached: boolean }>`
  display: flex;
  position: fixed;
  top: 0;
  width: 100vw;
  padding: 24px;
  background-color: ${props =>
    props.isTopReached ? Color.white : Color.black};
  transition: background-color 400ms ease;

  path {
    stroke: ${props => (props.isTopReached ? Color.black : Color.white)};
  }

  @media only screen and ${props => props.theme.maxGrid2} {
    padding: 12px 18px;
    justify-content: flex-end;
  }
`;

const Center = styled(Col)`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%) translateY(30%);
  white-space: nowrap;
`;

export default Presenter;
