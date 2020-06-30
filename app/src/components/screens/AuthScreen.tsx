import React, { FC } from 'react';
import { SimpleLayout } from '../common/SimpleLayout';
import { SignIn } from '../modules/auth/SignIn';
import { SignUp } from '../modules/auth/SignUp';
import { RouteComponentProps } from '@reach/router';
import { Logo } from '../common/Logo';
import styles from './AuthScreen.module.css';

interface IProps extends RouteComponentProps {
  mode: 'signIn' | 'signUp';
}

export const AuthScreen: FC<IProps> = ({ mode }) => {
  return (
    <SimpleLayout>
      <div>
        <div className={styles.Logo}>
          <Logo size={130} />
        </div>
        {mode === 'signIn' && <SignIn />}
        {mode === 'signUp' && <SignUp />}
      </div>
    </SimpleLayout>
  );
};
