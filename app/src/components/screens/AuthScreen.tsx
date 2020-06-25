import React, { FC } from 'react';
import { SimpleLayout } from '../common/SimpleLayout';
import { SignIn } from '../auth/SignIn';
import { SignUp } from '../auth/SignUp';
import { RouteComponentProps } from '@reach/router';

interface IProps extends RouteComponentProps {
  mode: 'signIn' | 'signUp';
}

export const AuthScreen: FC<IProps> = ({ mode }) => {
  return (
    <SimpleLayout>
      {mode === 'signIn' && <SignIn />}
      {mode === 'signUp' && <SignUp />}
    </SimpleLayout>
  );
};
