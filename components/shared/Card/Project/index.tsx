import React, { FC } from 'react';
import { ProjectCardWrapper } from './styles';
import { Props } from './types';

const ProjectCard: FC<Props> = ({ image: { src, alt } }: Props) => (
  <ProjectCardWrapper>
    <img src={src} alt={alt} />
  </ProjectCardWrapper>
);

export default ProjectCard;
