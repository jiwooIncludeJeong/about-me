import React, { useEffect, useRef, useState } from 'react';
import Presenter from '@components/Career/Presenter';
import useObserve from '@hooks/useObserve';
import { useSetRecoilState } from 'recoil';
import { selectedMenuAtom } from '@recoils/atoms/Layout/header';
import { MenuListEnum } from '@enums/Layout/header';
import type { CareerItemType } from '@interfaces/Career';

interface Props {}

const Career: React.FC<Props> = props => {
  const {} = props;

  const setSelectedMenu = useSetRecoilState(selectedMenuAtom);
  const divRef = useRef<HTMLDivElement>(null);
  const onObserve = () => {
    setSelectedMenu(MenuListEnum.CAREER);
  };
  const { isFocused, handleFocus } = useObserve(divRef, onObserve, () => {}, {
    threshold: 0.7,
    root: null,
    rootMargin: '-20px 0px -20px 0px',
  });

  const [items, setItems] = useState<Array<CareerItemType>>([
    {
      id: 11,
      duration: '2022.11 ~ NOW',
      content: 'Whitecube Front End Developer',
    },
    {
      id: 0,
      duration: '2021.08 ~ 2022.10',
      content: 'Bunkerkids Front End Developer',
    },
    {
      id: 1,
      duration: '2021.02 ~ 2021.08',
      content: 'Bunkerkids React Native Intern',
    },
    {
      id: 2,
      duration: '2016.03 ~ 2022.02',
      content: '숭실대학교 소프트웨어학부',
    },
  ]);
  const [selectedIndex, setSelectedIndex] = useState<number>(items.length - 1);

  useEffect(() => {
    if (items.length > 0) {
      setSelectedIndex(items.length - 1);
    }
  }, [items]);

  useEffect(() => {
    handleFocus(true);
  }, []);

  return (
    <Presenter
      divRef={divRef}
      items={items}
      selectedIndex={selectedIndex}
      isFocused={isFocused}
    />
  );
};

export default Career;
