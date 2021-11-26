import React from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies
import { Meta } from '@storybook/react';

import Button from '.';

export default {
  component: Button,
  title: 'Components/Button',
} as Meta;

export const Primary: React.VFC = () => <Button href="">Button</Button>;
