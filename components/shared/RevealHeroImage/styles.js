import styled from 'styled-components';

export const Wrapper = styled.div`
  display: inline-block;
  max-width: 350px;
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 350px;
  min-height: 428px;

  &::after {
    content: '';
    position: absolute;
    bottom: 4px;
    left: 0;
    right: 0;
    height: 90%;
    width: 70%;
    margin: 0 auto;
    background: ${({ theme: { colors } }) => colors.accent};

    ${({ theme }) => theme.minBp('tablet')} {
      margin: 0;
    }
  }

  img {
    position: absolute;
    z-index: 10;
    width: 350px;
    height: auto;
    left: 0px;

    ${({ theme }) => theme.minBp('tablet')} {
      left: -40px;
    }
  }
`;
