import React, { useCallback } from 'react';
import { objectToArray } from '~/utils';
import TabItem from '@components/UI/Tab/TabItem';
import styled from 'styled-components';
import { Row } from '@styles/default-styles';

interface Props<T> {
  tabEnum: Record<string, string>;
  tabItemWidth?: number;
  selectedTab: string;
  handleSelectedTab: (tab: T) => void;
}

export type TabComponentInterface<T = any> = React.FC<Props<T>>;

const Tab: TabComponentInterface = props => {
  const { tabEnum, tabItemWidth, selectedTab, handleSelectedTab } = props;
  const enumArray = objectToArray(tabEnum);

  return (
    <Wrapper>
      {enumArray.map(([key, value], index) => (
        <TabItem
          key={key}
          enumKey={key}
          enumValue={value as string}
          tabItemWidth={tabItemWidth}
          isSelected={value === selectedTab}
          handleSelectedTab={handleSelectedTab}
        />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled(Row)`
  width: 100%;
  justify-content: flex-start;
  align-items: center;
`;

export default Tab;
