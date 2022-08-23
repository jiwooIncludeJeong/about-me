import React from 'react';
import ModalLayout from '@components/UI/Modal/ModalLayout';
import styled from 'styled-components';
import { Col } from '@styles/default-styles';
import Typo from '@components/UI/Typo/Typo';
import DarkColor from '@assets/darkColor';
import type { ProjectType } from '@interfaces/Projects';
import type { TabComponentInterface } from '@components/UI/Tab';
import Tab from '@components/UI/Tab';
import { ProjectModalTabEnum } from '@enums/Projects/Modal';

const TabComponent = Tab as TabComponentInterface<ProjectModalTabEnum>;

interface Props {
  showModal: boolean;
  closeModal: () => void;
  modalData: ProjectType | null;
  selectedTab: ProjectModalTabEnum;
  handleSelectedTab: (tab: ProjectModalTabEnum) => void;
}

const Presenter: React.FC<Props> = props => {
  const { showModal, closeModal, modalData, handleSelectedTab, selectedTab } =
    props;
  return (
    <ModalLayout show={showModal} close={closeModal}>
      <Wrapper>
        <Typo fontType={'EN/Heading/L/Bold'} color={DarkColor.black}>
          {modalData?.title.kr}
        </Typo>
        <TabComponent
          tabEnum={ProjectModalTabEnum}
          tabItemWidth={100}
          handleSelectedTab={handleSelectedTab}
          selectedTab={selectedTab}
        />
      </Wrapper>
    </ModalLayout>
  );
};

const Wrapper = styled(Col)`
  width: 100%;
  height: 100%;
  padding: 0 48px;

  @media only screen and ${({ theme }) => theme.maxGrid2} {
    padding: 0 20px;
  }
`;

export default Presenter;
