import React, { FC } from 'react';
import { Props } from './types';

import { Wrapper } from './Example.styles.js';

const Example: FC<Props> = ({ temporary = 'Example' }: Props) => (
  <Wrapper>
    {temporary}
  </Wrapper>
);

export default Example;