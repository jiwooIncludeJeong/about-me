import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '@styles/theme';
import Header from '@components/Layout/Header';

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = props => {
  const { children } = props;
  return (
    <ThemeProvider theme={theme}>
      <Header />
      {children}
    </ThemeProvider>
  );
};

export default Layout;
