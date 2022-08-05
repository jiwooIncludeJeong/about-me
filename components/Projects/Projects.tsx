import React, { useRef } from 'react';
import Presenter from '@components/Projects/Presenter';
import useObserve from '@hooks/useObserve';
import { useSetRecoilState } from 'recoil';
import { selectedMenuAtom } from '@recoils/atoms/Layout/header';
import { MenuListEnum } from '@enums/Layout/header';
import useModal from '@hooks/useModal';

interface Props {}

const Projects: React.FC<Props> = props => {
  const {} = props;

  const setSelectedMenu = useSetRecoilState(selectedMenuAtom);
  const divRef = useRef<HTMLDivElement>(null);
  const onObserve = () => {
    setSelectedMenu(MenuListEnum.PROJECTS);
  };
  useObserve(divRef, onObserve);
  const { show: showModal, open: openModal, close: closeModal } = useModal();

  return (
    <Presenter
      divRef={divRef}
      showModal={showModal}
      openModal={openModal}
      closeModal={closeModal}
    />
  );
};

export default Projects;
