import { useMutation } from '@tanstack/react-query';
import { loginUser } from '../../../api';
import type { LoginRequest } from '../../../types';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema } from './login.schema';
import { auth } from '../../../redux/reducers';
import { singleToasts } from '../../../utils/toast.util';
import { FormRow } from '../form-row';
import { AuthForm } from '../auth-form';
import { useState } from 'react';

export const LoginForm = () => {
  const [loginInput, setLoginInput] = useState('');
  const dispatch = useDispatch();

  const mutation = useMutation({
    mutationKey: ['loginUser'],
    mutationFn: loginUser,
    onSuccess: data => {
      dispatch(auth({ login: loginInput }));
      singleToasts(`${data.message}`, 'success');
    },
    onError: err => singleToasts(`${err.message || err}`, 'error'),
  });

  function onSubmit(authData: LoginRequest) {
    mutation.mutate(authData);
  }

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ resolver: zodResolver(loginSchema) });

  return (
    <AuthForm
      onSubmit={handleSubmit(onSubmit)}
      isPending={mutation.isPending}
      submitMessage="Login"
    >
      <FormRow label="Login" error={errors.login}>
        <input
          type="text"
          id="login"
          placeholder="SuperUser"
          {...register('login')}
          value={loginInput}
          onChange={e => {
            setLoginInput(e.target.value);
          }}
        />
      </FormRow>

      <FormRow label="Password" error={errors.password}>
        <input type="password" id="password" placeholder="••••••••" {...register('password')} />
      </FormRow>
    </AuthForm>
  );
};
