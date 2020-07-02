import React, { FC } from 'react';
import { RouteComponentProps } from '@reach/router';
import { MainLayout } from '../../common/MainLayout';

interface IProps extends RouteComponentProps {}

export const ExercisesScreen: FC<IProps> = () => {
  return <MainLayout title='Exercises'>Exercises</MainLayout>;
};
