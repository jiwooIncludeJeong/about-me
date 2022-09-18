import React from 'react';
import styled from 'styled-components';
import { Col } from '@styles/default-styles';
import type { ProjectType } from '@interfaces/Projects';
import DetailItem from '@components/Projects/Modal/ModalContent/OverviewSlide/DetailItem';

interface Props {
  modalData: ProjectType | null;
}

const DetailSlide: React.FC<Props> = props => {
  const { modalData } = props;

  return (
    <Wrapper>
      <DetailItem detail={modalData?.detail ?? []} />
    </Wrapper>
  );
};
const Wrapper = styled(Col)`
  width: 100%;
  padding: 24px 48px;

  @media only screen and ${({ theme }) => theme.maxGrid2} {
    padding: 12px 24px;
  }
`;
export default DetailSlide;
