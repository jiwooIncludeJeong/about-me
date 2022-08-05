import type { RefObject } from 'react';
import React from 'react';
import styled from 'styled-components';
import { Container } from '@styles/default-styles';
import Typo from '@components/UI/Typo/Typo';
import Color from '@assets/color';
import Modal from '@components/Projects/Modal';

interface Props {
  divRef: RefObject<HTMLDivElement>;
  showModal: boolean;
  closeModal: () => void;
  openModal: (data: any) => void;
}

const Presenter: React.FC<Props> = props => {
  const { divRef, openModal } = props;
  return (
    <React.Fragment>
      <Wrapper ref={divRef} onClick={openModal}>
        <Typo fontType={'KR/Body/L/Bold'} color={Color.white}>
          TBD: PROJECTS
        </Typo>
      </Wrapper>
      <Modal {...props} />
    </React.Fragment>
  );
};

const Wrapper = styled(Container)`
  height: 100vh;
  background-color: #0070f3;
  justify-content: center;
  align-items: center;
`;

export default Presenter;
