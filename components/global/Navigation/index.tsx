import React, { FC } from 'react';
import Text from '@components/shared/Text';
import Button from '@components/shared/Button';
import {
  LinkWrapper,
  NavigationList,
  NavigationWrapper,
} from './Navigation.styled.js';
import { buttons } from './config';

const Navigation: FC = () => (
  <NavigationWrapper>
    <Button href="/">
      <Text tag="span">.Luke</Text>
    </Button>
    <NavigationList>
      {buttons.map(({ text, url }) => (
        <LinkWrapper key={text}>
          <Button href={url}>
            <Text tag="p">{text}</Text>
          </Button>
        </LinkWrapper>
      ))}
    </NavigationList>
  </NavigationWrapper>
);

export default Navigation;
