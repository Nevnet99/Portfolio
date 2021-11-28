import React from 'react';
import { Story, Meta } from '@storybook/react';

import Card from '.';
import { CardProps } from './types';

export default {
  title: 'Components / Shared / Card / 4. All Stories',
  component: Card,
  argTypes: { },
} as Meta;

const Template: Story<CardProps> = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Testing Card',
  date: Date.now().toString(),
};

export const Blog = Template.bind({});
Blog.args = {
  type: 'blog',
  title: 'Testing Card',
  date: Date.now().toString(),
};

export const Project = Template.bind({});
Project.args = {
  type: 'project',
  title: 'Testing Card',
  date: Date.now().toString(),
};
