import React, { FC } from 'react';
import { Card } from 'antd';
import { SimpleLayout } from '../common/SimpleLayout';
import { SignIn } from '../auth/SignIn';
import { SignUp } from '../auth/SignUp';
import { RouteComponentProps } from '@reach/router';

interface IProps extends RouteComponentProps {}

export const MainScreen: FC<IProps> = () => {
  return <SimpleLayout>Main</SimpleLayout>;
};
