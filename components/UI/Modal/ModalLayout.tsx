import type { MouseEventHandler } from 'react';
import React from 'react';
import styled from 'styled-components';
import Color from '@assets/color';
import useScrollLock from '@hooks/useScrollLock';

interface Props {
  show: boolean;
  close: () => void;
  children: React.ReactNode;
}

const ModalLayout: React.FC<Props> = props => {
  const { close, children, show } = props;
  useScrollLock(show);
  const onClickInner: MouseEventHandler<HTMLDivElement> = e => {
    e.stopPropagation();
  };
  return (
    <Outer onClick={close} show={show}>
      <Inner onClick={onClickInner}>{children}</Inner>
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
`;

const Inner = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${Color.white};
  border-radius: 4px;
`;

export default ModalLayout;
