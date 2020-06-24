import React, { FC } from 'react';

interface IProps {}

export const Logo: FC<IProps> = () => {
  return (
    <div>
      <img width={140} src={require('../../images/carver.png')} />
    </div>
  );
};
