import styled from 'styled-components';

export const NavigationWrapper = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${({ theme }) => theme.minBp('tablet')} {
    flex-direction: row;
    align-items: flex-end;
  }

  span {
    font-size: ${({
      theme: {
        typography: { fontSize },
      },
    }) => fontSize.xxl};
  }
`;

export const NavigationList = styled.ul`
  display: flex;
  align-items: flex-end;
  list-style: none;
  flex-wrap: wrap;

  ${({ theme }) => theme.minBp('tablet')} {
    flex-wrap: nowrap;
  }
`;

export const LinkWrapper = styled.li`
  a {
    text-decoration: none;
  }

  p {
    margin: 0;
    font-weight: 300;
    color: ${({ theme: { colors } }) => colors.primary};
    text-transform: uppercase;
    transition: 0.2s all;
    margin-top: 20px;

    ${({ theme }) => theme.minBp('tablet')} {
      margin-top: 0;
    }

    &:hover {
      color: ${({ theme: { colors } }) => colors.accent};
    }
  }

  &:not(:last-child) {
    margin-right: 30px;
  }
`;
