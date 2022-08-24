import React from 'react';
import ModalLayout from '@components/UI/Modal/ModalLayout';
import styled from 'styled-components';
import { Col, Row } from '@styles/default-styles';
import Typo from '@components/UI/Typo/Typo';
import DarkColor from '@assets/darkColor';
import type { ProjectType } from '@interfaces/Projects';
import type { TabComponentInterface } from '@components/UI/Tab';
import Tab from '@components/UI/Tab';
import { ProjectModalTabEnum } from '@enums/Projects/Modal';
import useWindowSize from '@hooks/useWindowSize';

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

  const { isTablet } = useWindowSize();

  return (
    <ModalLayout show={showModal} close={closeModal}>
      <Wrapper>
        <Top>
          <Title>
            <Typo
              fontType={isTablet ? 'EN/Body/L/Bold' : 'EN/Heading/L/Bold'}
              color={DarkColor.black}
            >
              {modalData?.title.en}
            </Typo>
            <Typo
              fontType={isTablet ? 'KR/Body/S/Bold' : 'KR/Heading/XS/Bold'}
              color={DarkColor.black}
            >
              {modalData?.title.kr}
            </Typo>
          </Title>
        </Top>
        <TabComponent
          tabEnum={ProjectModalTabEnum}
          tabItemWidth={isTablet ? 70 : 100}
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
const Top = styled(Row)`
  justify-content: space-between;
`;
const Title = styled(Row)`
  width: unset;
  align-items: flex-end;

  p {
    color: ${({ theme }) => theme.color.black};
    margin-right: 12px;
  }
  @media only screen and ${({ theme }) => theme.maxGrid2} {
    flex-direction: column;
    align-items: flex-start;
  }
`;
export default Presenter;
