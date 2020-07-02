import React, { FC } from 'react';
import { RouteComponentProps } from '@reach/router';
import { MainLayout } from '../../common/MainLayout';

interface IProps extends RouteComponentProps {}

export const SettingsScreen: FC<IProps> = () => {
  return <MainLayout title='Settings'>Settings</MainLayout>;
};
