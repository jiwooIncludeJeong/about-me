import React, { useRef } from 'react';
import Presenter from '@components/Projects/Presenter';
import useObserve from '@hooks/useObserve';
import { useSetRecoilState } from 'recoil';
import { selectedMenuAtom } from '@recoils/atoms/Layout/header';
import { MenuListEnum } from '@enums/Layout/header';

interface Props {}

const Projects: React.FC<Props> = props => {
  const {} = props;

  const setSelectedMenu = useSetRecoilState(selectedMenuAtom);
  const divRef = useRef<HTMLDivElement>(null);
  const onObserve = () => {
    setSelectedMenu(MenuListEnum.PROJECTS);
  };
  useObserve(divRef, onObserve);

  return <Presenter divRef={divRef} />;
};

export default Projects;
