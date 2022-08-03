import React, { useEffect, useState } from 'react';
import Presenter from '@components/Layout/Header/Presenter';
import { useRecoilState } from 'recoil';
import { isTopReachedAtom } from '@recoils/atoms/Layout/header';

interface Props {}

const Header: React.FC<Props> = props => {
  const {} = props;

  const [isTopReached, setIsTopReached] = useRecoilState(isTopReachedAtom);

  const onScroll = () => {
    setIsTopReached(window.scrollY === 0);
  };

  useEffect(() => {
    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return <Presenter isTopReached={isTopReached} />;
};

export default Header;
