export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: {
      method: "numeric",
    },
  },
  layout: 'fullscreen',
  viewport: {
    viewports: {
      mobile: {
        name: 'Mobile',
        styles: {
          width: '320px',
          height: '568px',
        },
      },
      tablet: {
        name: 'Tablet',
        styles: {
          width: '768px',
          height: '1024px',
        },
      },
      laptop: {
        name: 'Laptop',
        styles: {
          width: '1280px',
          height: '1028px',
        },
      },
      desktop: {
        name: 'Desktop',
        styles: {
          width: '1440px',
          height: '1028px',
        },
      },
    }
  }
}