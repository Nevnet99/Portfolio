import styled from 'styled-components';
import { WrapperProps } from './types';

export const Wrapper = styled.section<WrapperProps>`
  display: flex;
  flex-direction: column;

  ${({ related }) =>
    `${related ? `margin-top: 0px;` : `  margin-top: 160px;`}`};
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 20px;

  h2 {
    margin: 0;
    font-size: ${({
      theme: {
        typography: { fontSize },
      },
    }) => fontSize.lg};
    font-weight: 300;
  }

  p {
    font-size: ${({
      theme: {
        typography: { fontSize },
      },
    }) => fontSize.lg};
  }
`;

export const Posts = styled.ul`
  padding: 0;
  margin: 0;
  display: grid;
  list-style: none;
  grid-template-columns: 1fr;
  grid-gap: 20px;

  ${({ theme }) => theme.minBp('tablet')} {
    grid-template-columns: repeat(2, 1fr);
  }

  ${({ theme }) => theme.minBp('desktop')} {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 30px;
  }
`;

export const PostWrapper = styled.li``;
