import React, { useRef } from 'react';
import Presenter from '@components/Introduce/Presenter';
import useObserve from '@hooks/useObserve';
import { useSetRecoilState } from 'recoil';
import { selectedMenuAtom } from '@recoils/atoms/Layout/header';
import { MenuListEnum } from '@enums/Layout/header';

interface Props {}

const Introduce: React.FC<Props> = props => {
  const {} = props;

  const setSelectedMenu = useSetRecoilState(selectedMenuAtom);
  const divRef = useRef<HTMLDivElement>(null);
  const onObserve = () => {
    setSelectedMenu(MenuListEnum.INTRODUCE);
  };
  useObserve(divRef, onObserve);

  return <Presenter divRef={divRef} />;
};

export default Introduce;
