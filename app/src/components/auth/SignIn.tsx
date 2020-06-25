import React, { FC, useState, useContext } from 'react';
import { message, Button, Input, Form, Card } from 'antd';
import { Link } from '@reach/router';
import { PATHS } from '../../common/paths';
import { AuthProviderContext } from '../providers/AuthProvider';

interface IModel {
  email: string;
  password: string;
}

export const SignIn: FC = () => {
  const { signIn } = useContext(AuthProviderContext);
  const [loading, setLoading] = useState(false);
  const onSubmit = async (data: IModel) => {
    setLoading(true);
    try {
      await signIn(data.email, data.password);
    } catch (error) {
      message.error(error.message);
    }
    setLoading(false);
  };

  return (
    <Card title='Sign in' extra={<Link to={PATHS.SIGN_UP}>Sign up</Link>} style={{ width: 300 }}>
      <Form onFinish={onSubmit} name='basic'>
        <Form.Item name='email' rules={[{ required: true, message: 'Please input your email' }]}>
          <Input size='large' type='email' autoComplete='email' placeholder='Email' />
        </Form.Item>

        <Form.Item name='password' rules={[{ required: true, message: 'Please input your password' }]}>
          <Input size='large' type='password' autoComplete='current-password' placeholder='Password' />
        </Form.Item>

        <Button block disabled={loading} loading={loading} type='primary' size='large' htmlType='submit'>
          Sign in
        </Button>
      </Form>
    </Card>
  );
};
