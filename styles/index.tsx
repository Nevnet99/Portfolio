import { createGlobalStyle, DefaultTheme } from 'styled-components';
import { normalize } from 'styled-normalize';

// TODO: fix theming types.

const breakpointValues = {
  tablet: 768,
  laptop: 1024,
  desktop: 1440,
};

const setBreakpoint = (breakpoint: 'tablet' | 'laptop' | 'desktop' | number): number | string => {
  if (typeof breakpoint === 'string' && breakpoint in breakpointValues)
    return breakpointValues[breakpoint];

  return breakpoint;
};

export const customTheme: DefaultTheme = {
  typography: {
    fontSize: {
      xs: '24px',
      sm: '16px',
      reg: '48px',
      lg: '64px',
      xxl: '96px',
    },
  },
  colors: {
    primary: '#FFFFFF',
    accent: '#4717F6',
    background: '#0E0B16',
  },
  minBp: (breakpoint: 'tablet' | 'laptop' | 'desktop' | number): string =>
    `@media (min-width: ${setBreakpoint(breakpoint)}px)`,
};

export const GlobalStyle = createGlobalStyle`
  ${normalize}

  @font-face {
    font-family: "Work Sans";
    src: url("/fonts/WorkSans-Thin.ttf") format("truetype");
    font-weight: 100;
  }

  @font-face {
    font-family: "Work Sans";
    src: url("/fonts/WorkSans-Regular.ttf") format("truetype");
    font-weight: 300;
  }

  @font-face {
    font-family: "Work Sans";
    src: url("/fonts/WorkSans-Bold.ttf") format("truetype");
    font-weight: 500;
  }

  @font-face {
    font-family: "Work Sans";
    src: url("/fonts/WorkSans-Black.ttf") format("truetype");
    font-weight: 900;
  }

  body {
      ${({ theme: { colors } }) => `
        background: ${colors.background};
        color: ${colors.primary};
        font-family: 'Work Sans';
        padding: 0 20px;
        max-width: 1440px;
        margin: 0 auto;
      `};


      ${({ theme }) => theme.minBp('tablet')} {
          padding: 0 80px;
      }

      ${({ theme }) => theme.minBp('desktop')} {
          padding: 0 150px;
      }
    }
`;
