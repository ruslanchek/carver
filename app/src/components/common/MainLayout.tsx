import React, { FC } from 'react';

interface IProps {}

export const MainLayout: FC<IProps> = ({ children }) => {
  return <div>{children}</div>;
};
