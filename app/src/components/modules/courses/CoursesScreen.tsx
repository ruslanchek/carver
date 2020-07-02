import React, { FC } from 'react';
import { RouteComponentProps } from '@reach/router';
import { MainLayout } from '../../common/MainLayout';

interface IProps extends RouteComponentProps {}

export const CoursesScreen: FC<IProps> = () => {
  return <MainLayout title='Courses'>Courses</MainLayout>;
};
