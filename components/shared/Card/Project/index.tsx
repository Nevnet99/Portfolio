/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { FC } from 'react';
import { ProjectCardWrapper } from './styles.js';
import { Props } from './types';

const ProjectCard: FC<Props> = ({ image }: Props) => (
  <ProjectCardWrapper>
    <img src={image?.src} alt={image?.alt} />
  </ProjectCardWrapper>
);

export default ProjectCard;
