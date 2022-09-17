import type { MouseEventHandler } from 'react';
import React from 'react';
import styled from 'styled-components';
import DarkColor from '@assets/darkColor';
import useScrollLock from '@hooks/useScrollLock';
import { Row, Btn } from '@styles/default-styles';
import Typo from '@components/UI/Typo/Typo';
import useWindowSize from '@hooks/useWindowSize';

interface Props {
  show: boolean;
  close: () => void;
  children: React.ReactNode;
}

const ModalLayout: React.FC<Props> = props => {
  const { close, children, show } = props;

  const { isTablet } = useWindowSize();

  useScrollLock(show);
  const onClickInner: MouseEventHandler<HTMLDivElement> = e => {
    e.stopPropagation();
  };
  return (
    <Outer onClick={close} show={show}>
      <Inner onClick={onClickInner} show={show}>
        <Top>
          <Btn onClick={close}>
            <Typo
              fontType={isTablet ? 'KR/Button/S/Medium' : 'KR/Button/M/Bold'}
              color={DarkColor.black}
            >
              닫기
            </Typo>
          </Btn>
        </Top>
        {children}
      </Inner>
    </Outer>
  );
};

const Outer = styled.div<{ show: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 100px 200px;
  opacity: ${props => (props.show ? 1 : 0)};
  transition: opacity 200ms ease-in-out;
  z-index: ${props => (props.show ? 2 : -1)};

  @media only screen and ${props => props.theme.maxGrid2} and ${props =>
      props.theme.minGrid5} {
    padding: 40px;
  }
  @media only screen and ${props => props.theme.maxGrid5} {
    padding: 12px;
  }
`;

const Inner = styled.div<{ show: boolean }>`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.color.white};
  border-radius: 4px;
  transform: translateY(${({ show }) => (show ? 0 : '100vh')});
  transition: transform 200ms ease;
`;
const Top = styled(Row)`
  width: 100%;
  padding: 20px;
  justify-content: flex-end;

  p {
    color: ${({ theme }) => theme.color.black};
  }

  @media only screen and ${({ theme }) => theme.maxGrid2} {
    padding: 16px 20px;
  }
`;
export default ModalLayout;
