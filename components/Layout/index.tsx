import React from 'react';
import { ThemeProvider } from 'styled-components';
import Header from '@components/Layout/Header';
import { ThemeEnum } from '@enums/Layout/theme';
import { darkTheme, lightTheme } from '@styles/defaultTheme';
import ThemeChange, {
  useThemeChangeContext,
} from '@components/Layout/ThemeChange';
import ThemeChangeButton from '@components/Layout/ThemeChange/ThemeChangeButton';

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = props => {
  const { children } = props;
  const { theme } = useThemeChangeContext();

  return (
    <ThemeChange>
      <ThemeProvider theme={theme === ThemeEnum.Dark ? darkTheme : lightTheme}>
        <ThemeChangeButton />
        <Header />
        {children}
      </ThemeProvider>
    </ThemeChange>
  );
};

export default Layout;
