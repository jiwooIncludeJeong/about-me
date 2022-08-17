import type { RefObject } from 'react';
import React from 'react';
import styled from 'styled-components';
import { Container } from '@styles/default-styles';
import Modal from '@components/Projects/Modal';
import SectionTitle from '@components/UI/SectionTitle';
import ProjectsArea from '@components/Projects/ProjectsArea';

interface Props {
  divRef: RefObject<HTMLDivElement>;
  showModal: boolean;
  closeModal: () => void;
  openModal: (data: any) => void;
  isFocused: boolean;
}

const Presenter: React.FC<Props> = props => {
  const { divRef, openModal, isFocused } = props;
  return (
    <React.Fragment>
      <Wrapper ref={divRef} onClick={openModal}>
        <SectionTitle isFocused={isFocused} content={'PROJECTS'} />
        <ProjectsArea isFocused={isFocused} />
      </Wrapper>
      <Modal {...props} />
    </React.Fragment>
  );
};

const Wrapper = styled(Container)`
  justify-content: center;
  align-items: center;
`;

export default Presenter;
