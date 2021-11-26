import React, { FC } from 'react';
import Image from 'next/image';
import LukeImage from '../../../public/headshot-free.png';
import { ImageWrapper, Wrapper } from './styles.js';

const RevealHeroImage: FC = () => (
  <Wrapper>
    <ImageWrapper>
      <Image src={LukeImage.src} alt="" />
    </ImageWrapper>
  </Wrapper>
);

export default RevealHeroImage;
