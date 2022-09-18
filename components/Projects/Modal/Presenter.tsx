import React from 'react';
import ModalLayout from '@components/UI/Modal/ModalLayout';
import styled from 'styled-components';
import { Col, Row } from '@styles/default-styles';
import type { ProjectType } from '@interfaces/Projects';
import type { TabComponentInterface } from '@components/UI/Tab';
import Tab from '@components/UI/Tab';
import { ProjectModalTabEnum } from '@enums/Projects/Modal';
import useWindowSize from '@hooks/useWindowSize';
import ModalTitle from '@components/Projects/Modal/ModalTitle';
import ModalContent from '@components/Projects/Modal/ModalContent';
import type SwiperCore from 'swiper';
import OverviewSlide from '@components/Projects/Modal/ModalContent/OverviewSlide';
import DifficultySlide from '@components/Projects/Modal/ModalContent/DifficultySlide';
import EffortsSlide from '@components/Projects/Modal/ModalContent/EffortSlide';
import DetailSlide from '@components/Projects/Modal/ModalContent/DetailSlide';

const TabComponent = Tab as TabComponentInterface<ProjectModalTabEnum>;

interface Props {
  showModal: boolean;
  closeModal: () => void;
  modalData: ProjectType | null;
  selectedTab: ProjectModalTabEnum;
  handleSelectedTab: (tab: ProjectModalTabEnum) => void;
  onBeforeInit: (event: SwiperCore) => void;
  onActiveIndexChange: (event: SwiperCore) => void;
}

const Presenter: React.FC<Props> = props => {
  const {
    showModal,
    closeModal,
    modalData,
    handleSelectedTab,
    selectedTab,
    onBeforeInit,
    onActiveIndexChange,
  } = props;
  const { isTablet } = useWindowSize();

  return (
    <ModalLayout show={showModal} close={closeModal}>
      <Wrapper>
        <Top>
          <ModalTitle modalData={modalData} />
        </Top>
        <TabComponent
          tabEnum={ProjectModalTabEnum}
          tabItemWidth={isTablet ? 70 : 100}
          handleSelectedTab={handleSelectedTab}
          selectedTab={selectedTab}
        />
        <ModalContent
          tabEnum={ProjectModalTabEnum}
          onBeforeInit={onBeforeInit}
          onActiveIndexChange={onActiveIndexChange}
          modalData={modalData}
          renderSlide={(enumValue, modalDataProps) => {
            switch (enumValue) {
              case ProjectModalTabEnum.OVERVIEW:
                return <OverviewSlide modalData={modalDataProps} />;
              case ProjectModalTabEnum.DETAIL:
                return <DetailSlide modalData={modalDataProps} />;
              default:
                return <></>;
            }
          }}
        />
      </Wrapper>
    </ModalLayout>
  );
};

const Wrapper = styled(Col)`
  width: 100%;
  height: 100%;

  > div:not(.swiper) {
    padding: 0 48px;
  }
  > div.swiper {
    overflow-y: scroll;
  }

  @media only screen and ${({ theme }) => theme.maxGrid2} {
    > div:not(.swiper) {
      padding: 0 20px;
    }
  }
`;
const Top = styled(Row)`
  justify-content: space-between;
`;
export default Presenter;
