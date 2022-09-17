import React, { useRef } from 'react';
import Presenter from '@components/Projects/Presenter';
import useObserve from '@hooks/useObserve';
import { useSetRecoilState } from 'recoil';
import { selectedMenuAtom } from '@recoils/atoms/Layout/header';
import { MenuListEnum } from '@enums/Layout/header';
import useModal from '@hooks/useModal';
import type { ProjectType } from '@interfaces/Projects';
import useWindowSize from '@hooks/useWindowSize';

interface Props {}

const Projects: React.FC<Props> = props => {
  const {} = props;

  const setSelectedMenu = useSetRecoilState(selectedMenuAtom);
  const divRef = useRef<HTMLDivElement>(null);
  const onObserve = () => {
    setSelectedMenu(MenuListEnum.PROJECTS);
  };
  const { isGrid5 } = useWindowSize();
  const { isFocused } = useObserve(divRef, onObserve, () => {}, {
    threshold: isGrid5 ? 0.2 : 0.5,
    root: null,
    rootMargin: '-20px 0px -20px 0px',
  });
  const {
    show: showModal,
    open: openModal,
    close: closeModal,
    modalData,
  } = useModal<ProjectType>();

  return (
    <Presenter
      divRef={divRef}
      showModal={showModal}
      openModal={openModal}
      closeModal={closeModal}
      isFocused={isFocused}
      modalData={modalData}
    />
  );
};

export default Projects;
