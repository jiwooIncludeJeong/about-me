import React from 'react';
import Presenter from '@components/Projects/Modal/Presenter';
import type { ProjectType } from '@interfaces/Projects';
import useTab from '@hooks/useTab';
import { ProjectModalTabEnum } from '@enums/Projects/Modal';

interface Props {
  showModal: boolean;
  closeModal: () => void;
  modalData: ProjectType | null;
}

const Modal: React.FC<Props> = props => {
  const {} = props;

  const { selectedTab, handleSelectedTab } = useTab<ProjectModalTabEnum>(
    ProjectModalTabEnum.overview,
  );

  return (
    <Presenter
      {...props}
      selectedTab={selectedTab}
      handleSelectedTab={handleSelectedTab}
    />
  );
};

export default Modal;
