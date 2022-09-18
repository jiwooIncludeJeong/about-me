import React from 'react';
import styled from 'styled-components';
import { Col } from '@styles/default-styles';
import type { ProjectDetailType } from '@interfaces/Projects';
import Detail from '@components/Projects/Modal/ModalContent/OverviewSlide/DetailItem/Detail';

interface Props {
  detail?: Array<ProjectDetailType>;
}

const DetailItem: React.FC<Props> = props => {
  const { detail } = props;

  return (
    <Wrapper>
      {detail && detail.map(value => <Detail key={value.id} value={value} />)}
    </Wrapper>
  );
};

const Wrapper = styled(Col)``;

export default DetailItem;
