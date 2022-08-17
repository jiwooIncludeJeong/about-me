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
  const { isFocused } = useObserve(divRef, onObserve, () => {}, {
    threshold: 0.5,
    root: null,
    rootMargin: '-20px 0px -20px 0px',
  });
  const { show: showModal, open: openModal, close: closeModal } = useModal();

  return (
    <Presenter
      divRef={divRef}
      showModal={showModal}
      openModal={openModal}
      closeModal={closeModal}
      isFocused={isFocused}
    />
  );
};

export default Projects;
