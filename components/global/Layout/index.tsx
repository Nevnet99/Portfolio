import React, { FC } from 'react';
import Navigation from '@components/global/Navigation';
import { ThemeProvider } from 'styled-components';
import { theme, GlobalStyle } from '../../../styles';

const Layout: FC = ({ children }) => (
  <>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Navigation />
      {children}
    </ThemeProvider>
  </>
);

export default Layout;
