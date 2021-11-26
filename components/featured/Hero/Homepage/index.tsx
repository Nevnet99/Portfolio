import RevealHeroImage from '@components/shared/RevealHeroImage';
import Text from '@components/shared/Text';
import React, { FC } from 'react';
import { Content, Wrapper } from './styles.js';

const HomePageHero: FC = () => (
  <Wrapper>
    <RevealHeroImage />
    <Content>
      <Text tag="h2">Hey I&apos;m Luke.</Text>
      <Text tag="p">
        I’m a
        <b>Javascript</b>
        developer based in Manchester. I mainly work with
        <b>React</b>
        , but
        also have skills in other areas like
        <b>Node</b>
        . Below are some of my projects as well as
        ways to contact me.
      </Text>
    </Content>
  </Wrapper>
);

export default HomePageHero;
