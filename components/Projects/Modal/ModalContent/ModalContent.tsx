import React, { useRef } from 'react';
import Presenter from '@components/Projects/Modal/ModalContent/Presenter';
import { objectToArray } from '~/utils';
import type SwiperCore from 'swiper';
import type { ProjectType } from '@interfaces/Projects';

interface Props {
  tabEnum: Record<string, string>;
  onBeforeInit: (event: SwiperCore) => void;
  onActiveIndexChange: (event: SwiperCore) => void;
  modalData: ProjectType | null;
}

const ModalContent: React.FC<Props> = props => {
  const { tabEnum, onBeforeInit, onActiveIndexChange, modalData } = props;

  return (
    <Presenter
      tabEnumArray={objectToArray(tabEnum)}
      onBeforeInit={onBeforeInit}
      onActiveIndexChange={onActiveIndexChange}
      modalData={modalData}
    />
  );
};

export default ModalContent;
