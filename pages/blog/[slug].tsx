import React, { FC } from 'react';
import { getDatabase, getRecordMap } from '@lib';
import styled from 'styled-components';
import { NotionRenderer, Code } from 'react-notion-x';
import BlogPosts from '@components/featured/BlogPosts';
import { SlugProps, SlugStaticProps, SlugStaticReturn, StaticPathsProps } from '../types/blog';

const NotionWrapper = styled.div`
  .notion,
  .notion-header {
    background: transparent;
  }

  .notion-header {
    display: none;
  }

  .notion-viewport {
    position: relative;
  }

  .nav-header {
    display: none;
  }
`;

const BlogPage: FC<SlugProps> = ({ recordMap, database: { results }, pageId }: SlugProps) => (
  <NotionWrapper>
    <NotionRenderer
      recordMap={recordMap}
      components={{
        code: Code,
      }}
      fullPage
      darkMode
    />

    <BlogPosts
      blogPosts={results.filter((page) => page.id !== pageId)}
      related
      title="Related blog posts"
    />
  </NotionWrapper>
);

export const getStaticPaths = async (): Promise<StaticPathsProps> => {
  const database = await getDatabase('c0b4dd7ac9a94e46a93b7e758b107e5f');

  const paths = database?.results.map((page) => ({
    params: {
      slug: page?.properties?.slug.rich_text[0].text.content,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({
  params: { slug: pathSlug },
}: SlugStaticProps): Promise<SlugStaticReturn> => {
  const database = await getDatabase('c0b4dd7ac9a94e46a93b7e758b107e5f');

  const [matchedPage] = database.results.filter(
    ({ properties: { slug } }) => slug?.rich_text[0].text.content === pathSlug
  );

  const recordMap = await getRecordMap(matchedPage.id);

  return {
    props: {
      pageId: matchedPage.id,
      database,
      recordMap,
    },
  };
};

export default BlogPage;
