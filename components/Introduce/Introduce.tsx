import React, { useEffect, useRef, useState } from 'react';
import Presenter from '@components/Introduce/Presenter';
import useObserve from '@hooks/useObserve';
import { useSetRecoilState } from 'recoil';
import { selectedMenuAtom } from '@recoils/atoms/Layout/header';
import { MenuListEnum } from '@enums/Layout/header';
import useWindowSize from '@hooks/useWindowSize';

interface Props {}

const Introduce: React.FC<Props> = props => {
  const {} = props;
  const { isTablet } = useWindowSize();
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const setSelectedMenu = useSetRecoilState(selectedMenuAtom);
  const divRef = useRef<HTMLDivElement>(null);
  const onObserve = () => {
    setSelectedMenu(MenuListEnum.INTRODUCE);
    setIsFocused(true);
  };
  const onUnobserve = () => {
    setIsFocused(false);
  };
  useObserve(divRef, onObserve, onUnobserve, {
    threshold: isTablet ? 0.2 : 0.5,
    rootMargin: '-120px 0px 0px 0px',
  });

  useEffect(() => {
    setIsFocused(true);
  }, []);

  return <Presenter divRef={divRef} isFocused={isFocused} />;
};

export default Introduce;
