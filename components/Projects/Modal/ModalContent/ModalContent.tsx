import type { ReactNode } from 'react';
import React from 'react';
import Presenter from '@components/Projects/Modal/ModalContent/Presenter';
import { objectToArray } from '~/utils';
import type SwiperCore from 'swiper';
import type { ProjectType } from '@interfaces/Projects';

interface Props {
  tabEnum: Record<string, string>;
  onBeforeInit: (event: SwiperCore) => void;
  onActiveIndexChange: (event: SwiperCore) => void;
  modalData: ProjectType | null;
  renderSlide: (enumValue: string, modalData: ProjectType | null) => ReactNode;
}

const ModalContent: React.FC<Props> = props => {
  const { tabEnum, onBeforeInit, onActiveIndexChange, modalData, renderSlide } =
    props;

  return (
    <Presenter
      tabEnumArray={objectToArray(tabEnum)}
      onBeforeInit={onBeforeInit}
      onActiveIndexChange={onActiveIndexChange}
      modalData={modalData}
      renderSlide={renderSlide}
    />
  );
};

export default ModalContent;
