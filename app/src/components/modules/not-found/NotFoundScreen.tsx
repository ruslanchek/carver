import React, { FC } from 'react';
import { RouteComponentProps } from '@reach/router';
import { MainLayout } from '../../common/MainLayout';

interface IProps extends RouteComponentProps {}

export const NotFoundScreen: FC<IProps> = () => {
  return <MainLayout title='404'>Not found</MainLayout>;
};
