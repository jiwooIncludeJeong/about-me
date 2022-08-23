import { useState } from 'react';

const useTab = <T>(initialValue: T) => {
  const [selectedTab, setSelectedTab] = useState<T>(initialValue);

  const handleSelectedTab = (tab: T) => {
    setSelectedTab(tab);
  };

  return {
    selectedTab,
    handleSelectedTab,
  };
};

export default useTab;
