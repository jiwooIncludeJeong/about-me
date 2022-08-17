import React from 'react';
import type { ProjectTitleType } from '@interfaces/Projects';
import Presenter from '@components/Projects/ProjectsArea/ProjectItem/Presenter';

interface Props {
  onClickItem: (id: number) => void;
  id: number;
  title: ProjectTitleType;
  subTitle: string;
}

const ProjectItem: React.FC<Props> = props => {
  const { onClickItem, id } = props;

  const onClick = () => {
    onClickItem(id);
  };

  return <Presenter onClick={onClick} {...props} />;
};

export default ProjectItem;
