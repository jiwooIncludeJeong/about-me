import React from 'react';
import ModalLayout from '@components/UI/Modal/ModalLayout';
import styled from 'styled-components';
import { Col } from '@styles/default-styles';
import Typo from '@components/UI/Typo/Typo';
import DarkColor from '@assets/darkColor';

interface Props {
  showModal: boolean;
  closeModal: () => void;
}

const Presenter: React.FC<Props> = props => {
  const { showModal, closeModal } = props;
  return (
    <ModalLayout show={showModal} close={closeModal}>
      <Wrapper>
        <Typo fontType={'EN/Heading/L/Bold'} color={DarkColor.black}>
          TBD: Project 모달
        </Typo>
      </Wrapper>
    </ModalLayout>
  );
};

const Wrapper = styled(Col)`
  width: 100%;
  height: 100%;
`;

export default Presenter;
