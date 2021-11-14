import React, { FC } from 'react';
import BlogCard from './Blog';
import ProjectCard from './Project';
import { CardProps } from './types';

const Card: FC<CardProps> = ({ type, ...rest }) => {
  const cardComponents = {
    blog: <BlogCard {...rest} />,
    project: <ProjectCard {...rest} />,
  };
  return cardComponents[type];
};

export default Card;
