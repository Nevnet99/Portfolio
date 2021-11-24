import React, { FC } from 'react';
import Card from '@components/shared/Card';
import Text from '@components/shared/Text';
import Button from '@components/shared/Button';
import { Wrapper, Posts, PostWrapper, Content } from './styles';
import { Props } from './types';
// TODO: ADD view more button for loading currently not enough blog posts.

const BlogPosts: FC<Props> = ({
  blogPosts,
  related,
  title = 'Most recent blog posts',
  link = { href: '/blog', text: 'See the full blog' },
}: Props) => (
  <Wrapper related={related}>
    <Content>
      {title && <Text tag="h2">{title}</Text>}
      {link?.href && <Button href={link?.href}>{link?.text}</Button>}
    </Content>
    {/* TODO: create helper function to clean up blogposts from notion db. */}
    <Posts>
      {blogPosts?.map(({ properties: { date, name, previewImage, slug } }) => (
        <Button href={`/blog/${slug?.rich_text[0].text.content}`}>
          <PostWrapper>
            <Card
              type="blog"
              title={name?.title[0]?.text?.content}
              date={date.last_edited_time}
              image={{ src: previewImage?.files[0].file?.url }}
            />
          </PostWrapper>
        </Button>
      ))}
    </Posts>
  </Wrapper>
);

export default BlogPosts;
