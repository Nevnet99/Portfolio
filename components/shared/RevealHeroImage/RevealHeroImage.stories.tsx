import React from 'react';
import { Story, Meta } from '@storybook/react';

import RevealHeroImage from '.';

export default {
  title: 'Components / Shared / RevealHeroImage / 4. All Stories',
  component: RevealHeroImage,
  argTypes: { },
} as Meta;

const Template: Story = (args) => <RevealHeroImage {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: 'Testing',
};
