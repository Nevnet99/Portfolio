import React from 'react';
import { Story, Meta } from '@storybook/react';

import Example from '.';
import { Props } from './types';


export default {
  title: 'Components / Shared / Example / 4. All Stories',
  component: Example,
  argTypes: { },
} as Meta;

const Template: Story<Props> = (args) => <Example {...args} />;

export const Default = Template.bind({});
Default.args = {
  temporary: 'Example',
};
