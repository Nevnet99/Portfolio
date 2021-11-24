import React, { FC } from 'react';
import { getDatabase } from '@lib';
import BlogPosts from '@components/featured/BlogPosts';
import { Props, StaticProps } from '../types/blog';

const BlogPage: FC<Props> = ({ database: { results } }: Props) => (
  <div>
    <BlogPosts blogPosts={results} />
  </div>
);

export const getStaticProps = async (): Promise<StaticProps> => {
  const database = await getDatabase('c0b4dd7ac9a94e46a93b7e758b107e5f');

  return {
    props: {
      database,
    },
  };
};

export default BlogPage;
