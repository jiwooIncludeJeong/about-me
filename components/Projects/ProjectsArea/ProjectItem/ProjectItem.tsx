import React from 'react';
import type { ProjectType } from '@interfaces/Projects';
import Presenter from '@components/Projects/ProjectsArea/ProjectItem/Presenter';

interface Props {
  onClickItem: (data: ProjectType) => void;
  data: ProjectType;
}

const ProjectItem: React.FC<Props> = props => {
  const { onClickItem, data } = props;

  const onClick = () => {
    onClickItem(data);
  };

  return <Presenter onClick={onClick} {...data} />;
};

export default ProjectItem;
