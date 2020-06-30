import React, { FC } from 'react';

const SMALL_LOGO = require('../../images/carver-symbol.svg');
const LARGE_LOGO = require('../../images/carver.svg');
const SMALL_RATIO = 1;
const LARGE_RATIO = 2.935;

interface IProps {
  size: number;
  type?: 'small' | 'large';
}

export const Logo: FC<IProps> = ({ size, type = 'large' }) => {
  const isSmall = type === 'small';
  const src = isSmall ? SMALL_LOGO : LARGE_LOGO;
  const ratio = isSmall ? SMALL_RATIO : LARGE_RATIO;
  return <img width={size} height={size / ratio} src={src} />;
};
