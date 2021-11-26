import React from 'react';
import LukeImage from '../../../public/headshot-free.png';
import { ImageWrapper, Wrapper } from './styles.js';

const RevealHeroImage = () => (
  <Wrapper>
    <ImageWrapper>
      <img src={LukeImage.src} alt="" />
    </ImageWrapper>
  </Wrapper>
);

export default RevealHeroImage;
