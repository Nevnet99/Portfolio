import styled from 'styled-components';

export const Wrapper = styled.article`
  height: 100%;
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 350px;

  img {
    position: absolute;
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;
