import React, { FC, useContext } from 'react';
import { SimpleLayout } from '../common/SimpleLayout';
import { RouteComponentProps } from '@reach/router';
import { AuthProviderContext } from '../providers/AuthProvider';

interface IProps extends RouteComponentProps {}

export const MainScreen: FC<IProps> = () => {
  const { signOut } = useContext(AuthProviderContext);

  return (
    <SimpleLayout>
      Main
      <a href='#' onClick={signOut}>
        Sign Out
      </a>
    </SimpleLayout>
  );
};
