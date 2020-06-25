import React, { FC } from 'react';
import { Card } from 'antd';
import { SimpleLayout } from '../common/SimpleLayout';
import { SignIn } from '../auth/SignIn';
import { SignUp } from '../auth/SignUp';

interface IProps {}

export const MainScreen: FC<IProps> = () => {
  return (
    <SimpleLayout>
      <Card title='Sign In' extra={<a href='#'>More</a>} style={{ width: 300 }}>
        <SignIn />
      </Card>
      <Card title='Sign Up' extra={<a href='#'>More</a>} style={{ width: 300 }}>
        <SignUp />
      </Card>
    </SimpleLayout>
  );
};
