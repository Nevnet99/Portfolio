import React from 'react';
import { Story, Meta } from '@storybook/react';

import Layout from '.';
import { Props } from './types';

export default {
  title: 'Components / Global / Layout / 4. All Stories',
  component: Layout,
  argTypes: { },
} as Meta;

const Template: Story<Props> = (args) => <Layout {...args}>Example</Layout>;

export const Default = Template.bind({});
Default.args = {
  temporary: 'Layout',
};
