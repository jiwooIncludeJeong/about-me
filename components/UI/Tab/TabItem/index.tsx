import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Btn, Col } from '@styles/default-styles';
import Typo from '@components/UI/Typo/Typo';
import DarkColor from '@assets/darkColor';
import useWindowSize from '@hooks/useWindowSize';

interface Props {
  enumKey: string;
  enumValue: string;
  tabItemWidth?: number;
  isSelected: boolean;
  handleSelectedTab: (tab: string) => void;
}

const TabItem: React.FC<Props> = props => {
  const { enumValue, tabItemWidth, handleSelectedTab, isSelected } = props;
  const { isTablet } = useWindowSize();
  return (
    <Wrapper tabItemWidth={tabItemWidth}>
      <TextBtn
        isSelected={isSelected}
        onClick={() => handleSelectedTab(enumValue)}
      >
        <Typo
          fontType={isTablet ? 'EN/Button/XS/Medium' : 'EN/Button/M/Bold'}
          color={DarkColor.black}
        >
          {enumValue}
        </Typo>
      </TextBtn>
      <SelectedUnderline isSelected={isSelected} />
    </Wrapper>
  );
};

const Wrapper = styled(Col)<{ tabItemWidth?: number }>`
  width: ${({ tabItemWidth }) => (tabItemWidth ? `${tabItemWidth}px` : '100%')};
  align-items: center;
`;

const TextBtn = styled(Btn)<{ isSelected: boolean }>`
  width: 100%;
  padding: 12px;

  p {
    color: ${({ isSelected, theme }) =>
      isSelected ? theme.color.black : theme.color.gray};
  }
`;
const SelectedUnderline = styled.div<{
  isSelected: boolean;
}>`
  width: 100%;
  height: 2px;
  background-color: ${({ isSelected, theme }) =>
    isSelected ? theme.color.black : theme.color.black};
  transform: scaleX(${({ isSelected }) => (isSelected ? 1 : 0)});
  transition: transform 200ms ease;
  transform-origin: center;
`;

export default TabItem;
