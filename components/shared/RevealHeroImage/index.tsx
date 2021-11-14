import React from 'react';
import LukeImage from '../../../public/headshot-free.png';
import { ImageWrapper, Wrapper } from './styles';

const RevealHeroImage = () => {
  console.log(LukeImage, 'IW');

  return (
    <Wrapper>
      <ImageWrapper>
        <img src={LukeImage.src} alt="" />
      </ImageWrapper>
    </Wrapper>
  );
};

export default RevealHeroImage;
