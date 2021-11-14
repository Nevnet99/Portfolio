import React, { FC } from 'react';
import Link from 'next/link';

const Button: FC = ({ href, text, children }) => {
  const isExternal = () => new URL(href).origin !== location.origin;
  return isExternal ? (
    <a href={href}>{text || children}</a>
  ) : (
    <Link to={href}>{text || children}</Link>
  );
};

export default Button;
