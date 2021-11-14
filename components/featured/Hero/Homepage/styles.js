import styled from 'styled-components';

export const Wrapper = styled.section`
  margin-top: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  ${({ theme }) => theme.minBp('tablet')} {
    flex-direction: row;
  }
`;

export const Content = styled.div`
  h2 {
    font-size: ${({
      theme: {
        typography: { fontSize },
      },
    }) => fontSize.lg};
    font-weight: 300;
    margin-bottom: 10px;
  }

  p {
    font-size: ${({
      theme: {
        typography: { fontSize },
      },
    }) => fontSize.xs};
    font-weight: 300;
  }
`;
