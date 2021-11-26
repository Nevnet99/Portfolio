import { createElement, FC } from 'react';
import { TextProps } from './types';

const Text: FC<TextProps> = ({ tag, children, ...rest }) => createElement(tag, rest, children);

export default Text;
