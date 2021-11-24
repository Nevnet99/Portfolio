import styled from 'styled-components';
import Link from 'next/link';

export const StyledLink = styled(Link)`
  text-decoration: none;
`;

export const AnchorWrapper = styled.div`
  cursor: pointer;
  a {
    text-decoration: none;
    color: inherit;
  }
`;
