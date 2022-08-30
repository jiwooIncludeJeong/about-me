import React, { useCallback, useEffect, useRef } from 'react';
import Presenter from '@components/Projects/Modal/Presenter';
import type { ProjectType } from '@interfaces/Projects';
import useTab from '@hooks/useTab';
import { ProjectModalTabEnum } from '@enums/Projects/Modal';
import type SwiperCore from 'swiper';

interface Props {
  showModal: boolean;
  closeModal: () => void;
  modalData: ProjectType | null;
}

const Modal: React.FC<Props> = props => {
  const { showModal } = props;

  const { selectedTab, handleSelectedTab } = useTab<ProjectModalTabEnum>(
    ProjectModalTabEnum.overview,
  );

  const swiperRef = useRef<SwiperCore>(null);

  const onBeforeInit = (event: SwiperCore) => {
    // @ts-ignore
    swiperRef.current = event;
  };
  const onActiveIndexChange = (event: SwiperCore) => {
    const { activeIndex } = event;
    const activeTab: ProjectModalTabEnum =
      Object.values(ProjectModalTabEnum).find(
        (_, index) => index === activeIndex,
      ) ?? ProjectModalTabEnum.overview;
    if (activeTab) handleSelectedTab(activeTab);
  };
  const slideSwiperTo = (index: number) => {
    swiperRef.current?.slideTo(index);
  };

  const onCloseModal = useCallback(() => {
    handleSelectedTab(ProjectModalTabEnum.overview);
  }, [showModal]);

  useEffect(() => {
    if (!showModal) {
      onCloseModal();
    }
  }, [showModal]);

  useEffect(() => {
    const index = Object.values(ProjectModalTabEnum).findIndex(
      value => value === selectedTab,
    );
    slideSwiperTo(index);
  }, [selectedTab]);

  return (
    <Presenter
      {...props}
      selectedTab={selectedTab}
      handleSelectedTab={handleSelectedTab}
      onBeforeInit={onBeforeInit}
      onActiveIndexChange={onActiveIndexChange}
    />
  );
};

export default Modal;
