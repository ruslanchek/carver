import React, { FC, Fragment } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { message, Button, Input, Form } from 'antd';

interface IModel {
  email: string;
  password: string;
}

export const SignIn: FC = () => {
  const { signIn } = useAuth();
  const onSubmit = async (data: IModel) => {
    try {
      await signIn(data.email, data.password);
    } catch (error) {
      message.error(error.message);
    }
  };

  return (
    <Fragment>
      <Form onFinish={onSubmit} name='basic'>
        <Form.Item name='email' rules={[{ required: true, message: 'Please input your email' }]}>
          <Input size='large' type='email' autoComplete='email' placeholder='Email' />
        </Form.Item>

        <Form.Item name='password' rules={[{ required: true, message: 'Please input your password' }]}>
          <Input size='large' type='password' autoComplete='current-password' placeholder='Password' />
        </Form.Item>

        <Button type='primary' size='large' htmlType='submit'>
          Sign in
        </Button>
      </Form>
    </Fragment>
  );
};
