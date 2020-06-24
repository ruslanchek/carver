import React, { FC } from 'react';

import styles from './MainScreen.module.css';
import { SimpleLayout } from '../common/SimpleLayout';
import { Elevation, Card } from '@blueprintjs/core';
import { SignIn } from '../auth/SignIn';
import { SignUp } from '../auth/SignUp';

interface IProps {}

export const MainScreen: FC<IProps> = () => {
  return (
    <SimpleLayout>
      <Card elevation={Elevation.ONE} className={styles.Card}>
        <SignIn />
      </Card>
      <Card elevation={Elevation.ONE} className={styles.Card}>
        <SignUp />
      </Card>
    </SimpleLayout>
  );
};
