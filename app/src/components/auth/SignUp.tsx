import React, { FC, Fragment, useContext } from 'react';
import { Button, FormGroup, InputGroup, Intent, H4 } from '@blueprintjs/core';
import { useAuth } from '../../hooks/useAuth';
import { useForm, Controller } from 'react-hook-form';
import { ToastProviderContext } from '../providers/ToastProvider';

interface IModel {
  email: string;
  password: string;
}

export const SignUp: FC = () => {
  const { addToast } = useContext(ToastProviderContext);
  const { signUp } = useAuth();
  const { handleSubmit, control, errors } = useForm<IModel>();
  const onSubmit = async (data: IModel) => {
    try {
      await signUp(data.email, data.password);
    } catch (error) {
      addToast({
        message: error.message,
        intent: Intent.DANGER,
      });
    }
  };

  return (
    <Fragment>
      <form onSubmit={handleSubmit(onSubmit)}>
        <H4>Sign Up</H4>
        <FormGroup>
          <Controller
            as={InputGroup}
            name='email'
            placeholder='Email'
            autoComplete='email'
            rules={{ required: true }}
            control={control}
            defaultValue=''
          />
        </FormGroup>
        <FormGroup>
          <Controller
            as={InputGroup}
            name='password'
            placeholder='Password'
            type='password'
            autoComplete='current-password'
            rules={{ required: true }}
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
