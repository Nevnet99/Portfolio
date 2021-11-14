import React, { FC } from 'react';
import BlogHero from './Blog';
import HomePageHero from './Homepage';
import { HeroProps } from './types';

const Hero: FC<HeroProps> = ({ type = 'home', ...rest }) => {
  const heroComponents = {
    home: <HomePageHero {...rest} />,
    blog: <BlogHero {...rest} />,
  };

  return heroComponents[type];
};

export default Hero;
