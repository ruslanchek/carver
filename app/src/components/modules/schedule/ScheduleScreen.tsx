import React, { FC } from 'react';
import { RouteComponentProps } from '@reach/router';
import { MainLayout } from '../../common/MainLayout';

interface IProps extends RouteComponentProps {}

export const ScheduleScreen: FC<IProps> = () => {
  return <MainLayout title='Schedule'>Schedule</MainLayout>;
};
