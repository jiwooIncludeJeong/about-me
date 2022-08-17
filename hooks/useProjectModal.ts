import { useState } from 'react';
import type { ProjectType } from '@interfaces/Projects';

const useProjectModal = () => {
  const [selectedProjectItem, setSelectedProjectItem] =
    useState<ProjectType | null>(null);

  const openModal = (project: ProjectType) => {
    setSelectedProjectItem(project);
  };

  const closeModal = () => {
    setSelectedProjectItem(null);
  };

  return {
    show: !!selectedProjectItem,
    selectedProjectItem,
    openModal,
    closeModal,
  };
};

export default useProjectModal;
