import React from 'react';
import Presenter from '@components/Projects/Modal/ModalContent/OverviewSlide/Presenter';
import type { ProjectType } from '@interfaces/Projects';

interface Props {
  modalData: ProjectType | null;
}

const OverviewSlide: React.FC<Props> = props => {
  const {} = props;
  return <Presenter {...props} />;
};

export default OverviewSlide;
