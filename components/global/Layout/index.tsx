import React, { FC } from 'react';
import Navigation from '@components/global/Navigation';
import { ThemeProvider } from 'styled-components';
import { theme, GlobalStyle } from '../../../styles';

const Layout: FC = () => (
  <>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Navigation />
    </ThemeProvider>
  </>
);

export default Layout;
