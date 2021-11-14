import type { NextPage } from 'next';
import Hero from '@components/featured/Hero';

import Projects from '@components/featured/Projects';

const Home: NextPage = () => (
  <div>
    <Hero type="home" />
    <Projects />
  </div>
);

export default Home;
