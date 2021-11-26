import Text from '@components/shared/Text';
import React, { FC } from 'react';
import { formatDistanceToNow } from 'date-fns';
import Image from 'next/image';
import { Wrapper, ImageWrapper } from './styles.js';
import { Props } from './types';

const BlogCard: FC<Props> = ({ title, date, image }: Props) => (
  <Wrapper>
    <ImageWrapper>{image && <Image src={image.src} alt={image.alt} layout="fill" />}</ImageWrapper>
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
