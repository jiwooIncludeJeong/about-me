import React from 'react';
import { ThemeProvider } from 'styled-components';
import Header from '@components/Layout/Header';
import { ThemeEnum } from '@enums/Layout/theme';
import { darkTheme, lightTheme } from '@styles/defaultTheme';
import ThemeChangeButton from '@components/Layout/ThemeChangeButton';
import useTheme from '@hooks/useTheme';

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = props => {
  const { children } = props;
  const { theme, changeThemeToOpposite } = useTheme();

  return (
    <ThemeProvider theme={theme === ThemeEnum.Dark ? darkTheme : lightTheme}>
      <ThemeChangeButton handleTheme={changeThemeToOpposite} theme={theme} />
      <Header />
      {children}
    </ThemeProvider>
  );
};

export default Layout;
