import Text from '@components/shared/Text';
import React, { FC } from 'react';
import { formatDistanceToNow } from 'date-fns';
import { Wrapper, ImageWrapper } from './styles.js';
import { Props } from './types';

const BlogCard: FC<Props> = ({ title, date, image }: Props) => (
  <Wrapper>
    <ImageWrapper>{image && <img src={image.src} alt={image.alt} />}</ImageWrapper>
    {title && <Text tag="h3">{title}</Text>}
    {date && (
    <Text tag="p">
      {formatDistanceToNow(new Date(date))}
      ago.
    </Text>
    )}
  </Wrapper>
);

export default BlogCard;
