import React, { FC } from 'react';
import { AnchorWrapper, StyledLink } from './styles.js';
import { Props } from './types';

const Button: FC<Props> = ({ href, text, children }: Props) => {
  // eslint-disable-next-line no-restricted-globals
  const isExternal = href.includes('http');

  // TODO: Replace with conditional wrapper
  return (
    <AnchorWrapper>
      {isExternal ? (
        <a href={href}>{text || children}</a>
      ) : (
        <StyledLink href={href}>{text || children}</StyledLink>
      )}
    </AnchorWrapper>
  );
};

export default Button;
