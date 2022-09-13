import type { ReactNode } from 'react';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import styled from 'styled-components';
import type SwiperCore from 'swiper';
import type { ProjectType } from '@interfaces/Projects';

interface Props {
  tabEnumArray: Array<[string, unknown]>;
  onBeforeInit: (event: SwiperCore) => void;
  onActiveIndexChange: (event: SwiperCore) => void;
  modalData: ProjectType | null;
  renderSlide: (enumValue: string, modalData: ProjectType | null) => ReactNode;
}

const Presenter: React.FC<Props> = props => {
  const {
    tabEnumArray,
    onBeforeInit,
    onActiveIndexChange,
    modalData,
    renderSlide,
  } = props;
  return (
    <StyledSwiper
      onBeforeInit={onBeforeInit}
      initialSlide={0}
      onActiveIndexChange={onActiveIndexChange}
      autoHeight={true}
    >
      {tabEnumArray.map(([value]) => (
        <SwiperSlide id={value} key={value}>
          {renderSlide(value, modalData)}
        </SwiperSlide>
      ))}
    </StyledSwiper>
  );
};

const StyledSwiper = styled(Swiper)`
  width: 100%;
  max-height: calc(100vh - 350px);

  @media only screen and ${({ theme }) => theme.maxGrid2} {
    max-height: calc(100vh - 198px);
  }
`;

export default Presenter;
