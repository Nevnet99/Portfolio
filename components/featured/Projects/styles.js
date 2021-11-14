import styled from 'styled-components';

export const Wrapper = styled.section`
  margin-top: 120px;
`;

export const ProjectsWrapper = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: 1fr;
  padding: 0;
  margin: 0;
  grid-gap: 20px;

  ${({ theme }) => theme.minBp('tablet')} {
    grid-template-columns: repeat(2, 1fr);
  }

  ${({ theme }) => theme.minBp('desktop')} {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 30px;
  }
`;

export const ProjectWrapper = styled.li`
  width: 100%;
`;
