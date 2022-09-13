import React, { useMemo } from 'react';
import styled from 'styled-components';
import { Col } from '@styles/default-styles';
import type { ProjectType } from '@interfaces/Projects';
import { ProjectDetailTypeEnum } from '@enums/Projects/Modal';
import DetailItem from '@components/Projects/Modal/ModalContent/OverviewSlide/DetailItem';

interface Props {
  modalData: ProjectType | null;
}

const DifficultySlide: React.FC<Props> = props => {
  const { modalData } = props;

  const difficulties = useMemo(
    () =>
      modalData?.detail.filter(
        value => value.type === ProjectDetailTypeEnum.DIFFICULTY,
      ),
    [modalData],
  );

  return (
    <Wrapper>
      <DetailItem detail={difficulties} />
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
export default DifficultySlide;
