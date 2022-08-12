import React, { createContext, useContext, useState } from 'react';
import { ThemeEnum } from '@enums/Layout/theme';
import ThemeChangeButton from '@components/Layout/ThemeChange/ThemeChangeButton';

interface Props {
  children: React.ReactNode;
}

export const ThemeChangeContext = createContext<{
  theme: ThemeEnum;
  click: () => void;
}>({ theme: ThemeEnum.Dark, click: () => {} });
ThemeChangeContext.displayName = 'ThemeChangeContext';

const ThemeChange: React.FC<Props> = props => {
  const { children } = props;
  const [theme, setTheme] = useState<ThemeEnum>(ThemeEnum.Dark);
  const click = () => {
    setTheme(prev => {
      alert(prev);
      if (prev === ThemeEnum.Dark) {
        return ThemeEnum.Light;
      } else {
        return ThemeEnum.Dark;
      }
    });
  };
  return (
    <ThemeChangeContext.Provider value={{ theme, click }}>
      {children}
    </ThemeChangeContext.Provider>
  );
};

export const useThemeChangeContext = () => {
  const context = useContext(ThemeChangeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used in a <ThemeChangeButton/>');
  }
  return context;
};

export default ThemeChange;
