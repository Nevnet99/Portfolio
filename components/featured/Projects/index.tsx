import Card from '@components/shared/Card';
import React, { FC } from 'react';
import { ProjectsWrapper, ProjectWrapper, Wrapper } from './styles.js';

const projects = [
  {
    title: 'Project 1',
    image: {
      src: 'https://via.placeholder.com/360x550',
      placeholder: 'placeholder',
    },
  },
  {
    title: 'Project 2',
    image: {
      src: 'https://via.placeholder.com/360x550',
      placeholder: 'placeholder',
    },
  },
  {
    title: 'Project 3',
    image: {
      src: 'https://via.placeholder.com/360x550',
      placeholder: 'placeholder',
    },
  },
  {
    title: 'Project 4',
    image: {
      src: 'https://via.placeholder.com/360x550',
      placeholder: 'placeholder',
    },
  },
  {
    title: 'Project 5',
    image: {
      src: 'https://via.placeholder.com/360x550',
      placeholder: 'placeholder',
    },
  },
];
const Projects: FC = () => (
  <Wrapper id="projects">
    <ProjectsWrapper>
      {projects.map((project) => (
        <ProjectWrapper key={project?.title}>
          <Card {...project} type="project" />
        </ProjectWrapper>
      ))}
    </ProjectsWrapper>
  </Wrapper>
);

export default Projects;
