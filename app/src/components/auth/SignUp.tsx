import React, { FC, Fragment } from 'react';
import { Button, FormGroup, InputGroup, Intent, H2 } from '@blueprintjs/core';
import { useAuth } from '../../hooks/useAuth';
import { useForm, Controller } from 'react-hook-form';

interface IModel {
  email: string;
  password: string;
}

export const SignUp: FC = () => {
  const { signUp } = useAuth();
  const { handleSubmit, control } = useForm<IModel>();
  const onSubmit = async () => {};

  return (
    <Fragment>
      <form onSubmit={handleSubmit(onSubmit)}>
        <H2>Sign Up</H2>
        <FormGroup>
          <Controller
            as={InputGroup}
            name='email'
            placeholder='Email'
            autoComplete='email'
            control={control}
            defaultValue=''
          />
        </FormGroup>
        <FormGroup>
          <Controller
            as={InputGroup}
            name='password'
            placeholder='Password'
            autoComplete='new-password'
            control={control}
            defaultValue=''
          />
        </FormGroup>

        <Button large intent={Intent.PRIMARY} type='submit'>
          Sign Up
        </Button>
      </form>
    </Fragment>
  );
};
