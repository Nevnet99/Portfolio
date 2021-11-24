import type { NextPage } from 'next';
import Hero from '@components/featured/Hero';

import Projects from '@components/featured/Projects';
import BlogPosts from '@components/featured/BlogPosts';
import { getDatabase } from '@lib';

const Home: NextPage = ({ blogDatabase: { results } }: any) => (
  <div>
    <Hero type="home" />
    <Projects />
    <BlogPosts blogPosts={results} />
  </div>
);

export const getStaticProps = async () => {
  const blogDatabase = await getDatabase('c0b4dd7ac9a94e46a93b7e758b107e5f');

  return {
    props: {
      blogDatabase,
    },
  };
};

export default Home;
