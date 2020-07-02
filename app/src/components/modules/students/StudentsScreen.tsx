import React, { FC } from 'react';
import { RouteComponentProps } from '@reach/router';
import { MainLayout } from '../../common/MainLayout';

interface IProps extends RouteComponentProps {}

export const StudentsScreen: FC<IProps> = () => {
  return <MainLayout title='Students'>Students</MainLayout>;
};
