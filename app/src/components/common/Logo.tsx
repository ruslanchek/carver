import React, { FC } from 'react';

interface IProps {
  size: number;
}

export const Logo: FC<IProps> = ({ size }) => {
  return <img width={size} height={size / 2.935} src={require('../../images/carver.svg')} />;
};
