import Text from '@components/shared/Text';
import React, { FC } from 'react';
import { ProjectCardWrapper } from './styles';

const ProjectCard: FC = ({ title, image: { src, alt } }) => (
  <ProjectCardWrapper>
    <img src={src} alt={alt} />
  </ProjectCardWrapper>
);

export default ProjectCard;
