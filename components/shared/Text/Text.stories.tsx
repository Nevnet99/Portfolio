import React from 'react';
import { Story, Meta } from '@storybook/react';

import Text from '.';
import { TextProps } from './types';

export default {
  title: 'Components / Shared / Text / 4. All Stories',
  component: Text,
  argTypes: { },
} as Meta;

const Template: Story<TextProps> = (args) => <Text {...args}>Example Text</Text>;

export const Default = Template.bind({});
Default.args = {
  tag: 'p',
};
