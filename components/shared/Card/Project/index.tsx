/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { FC } from 'react';
import Image from 'next/image';
import { ProjectCardWrapper } from './styles.js';
import { Props } from './types';

const ProjectCard: FC<Props> = ({ image }: Props) => (
  <ProjectCardWrapper>
    {image && <Image src={image.src} alt={image.alt} width={360} height={550} />}
  </ProjectCardWrapper>
);

export default ProjectCard;
