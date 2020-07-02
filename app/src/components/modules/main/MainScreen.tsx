import React, { FC, useContext } from 'react';
import { RouteComponentProps } from '@reach/router';
import { MainLayout } from '../../common/MainLayout';
import { AuthProviderContext } from '../auth/AuthProvider';

interface IProps extends RouteComponentProps {}

export const MainScreen: FC<IProps> = () => {
  const { signOut } = useContext(AuthProviderContext);

  return (
    <MainLayout title='Home'>
      <a href='#' onClick={signOut}>
        Sign Out
      </a>
    </MainLayout>
  );
};
