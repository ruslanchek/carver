import React, { FC } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { message, Button, Input, Form, Card } from 'antd';
import { Link } from '@reach/router';
import { PATHS } from '../../common/paths';

interface IModel {
  email: string;
  password: string;
}

export const SignUp: FC = () => {
  const { signUp } = useAuth();
  const onSubmit = async (values: IModel) => {
    try {
      await signUp(values.email, values.password);
    } catch (error) {
      message.error(error.message);
    }
  };

  return (
    <Card title='Sign up' extra={<Link to={PATHS.SIGN_IN}>Sign in</Link>} style={{ width: 300 }}>
      <Form onFinish={onSubmit} name='basic'>
        <Form.Item name='email' rules={[{ required: true, message: 'Please input your email' }]}>
          <Input size='large' type='email' autoComplete='email' placeholder='Email' />
        </Form.Item>

        <Form.Item name='password' rules={[{ required: true, message: 'Please input your password' }]}>
          <Input size='large' type='password' autoComplete='current-password' placeholder='Password' />
        </Form.Item>

        <Button type='primary' size='large' htmlType='submit'>
          Sign up
        </Button>
      </Form>
    </Card>
  );
};
