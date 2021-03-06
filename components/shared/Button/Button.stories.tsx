import React from 'react';
import { Story, Meta } from '@storybook/react';

import Button from '.';
import { Props } from './types';

export default {
  title: 'Components / Shared / Button / 4. All Stories',
  component: Button,
  argTypes: { },
} as Meta;

const Template: Story<Props> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: 'Testing',
};
