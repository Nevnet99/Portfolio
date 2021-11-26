import React from 'react';
import type { AppProps } from 'next/app';
import Layout from '@components/global/Layout';
// core styles shared by all of react-notion-x (required)
import 'react-notion-x/src/styles.css';

// used for code syntax highlighting (optional)
import 'prismjs/themes/prism-tomorrow.css';

// used for collection views (optional)
import 'rc-dropdown/assets/index.css';

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
