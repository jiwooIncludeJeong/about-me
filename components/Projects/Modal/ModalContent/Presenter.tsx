import React, { RefObject } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import styled from 'styled-components';
import { Col } from '@styles/default-styles';
import type SwiperCore from 'swiper';
import OverviewSlide from '@components/Projects/Modal/ModalContent/OverviewSlide';
import type { ProjectType } from '@interfaces/Projects';

interface Props {
  tabEnumArray: Array<[string, unknown]>;
  onBeforeInit: (event: SwiperCore) => void;
  onActiveIndexChange: (event: SwiperCore) => void;
  modalData: ProjectType | null;
}

const Presenter: React.FC<Props> = props => {
  const { tabEnumArray, onBeforeInit, onActiveIndexChange, modalData } = props;
  return (
    <StyledSwiper
      onBeforeInit={onBeforeInit}
      initialSlide={0}
      onActiveIndexChange={onActiveIndexChange}
    >
      {tabEnumArray.map(([value]) => (
        <SwiperSlide id={value} key={value}>
          <OverviewSlide modalData={modalData} />
        </SwiperSlide>
      ))}
    </StyledSwiper>
  );
};

const StyledSwiper = styled(Swiper)`
  width: 100%;
  height: 100%;
`;

export default Presenter;
