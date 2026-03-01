import { type FC } from 'react';
import { FormRow } from '../form-row';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { registrationSchema, type RegistrationFormValues } from './registration.schema';
import { useMutation } from '@tanstack/react-query';
import { signUpUser } from '../../../api';
import type { ApiError, RegistrationSuccessResponse, SignUpDto } from '../../../types';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { registerUser } from '../../../redux/reducers';

export const RegistrationForm: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegistrationFormValues>({ resolver: zodResolver(registrationSchema) });
  const dispatch = useDispatch();
  const mutation = useMutation<RegistrationSuccessResponse, ApiError, SignUpDto>({
    mutationKey: ['signUpUser'],
    mutationFn: signUpUser,
    onSuccess: data => {
      console.log(data);
      dispatch(registerUser({ email: data.email, login: data.login }));
      toast.success(`Регистрация прошла успешно!`);
    },
    onError: err => toast.error(`${err.message || err}`),
  });

  function onSubmit(data: RegistrationFormValues) {
    console.log(data);
    mutation.mutate(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormRow label="Email" error={errors.email}>
        <input type="email" id="email" required {...register('email')} />
      </FormRow>
      <FormRow label="Login" error={errors.login}>
        <input type="text" id="login" autoComplete="login" {...register('login')} required />
      </FormRow>
      <FormRow label="Password" error={errors.password}>
        <input
          type="password"
          id="password"
          autoComplete="new-password"
          required
          {...register('password')}
        />
      </FormRow>
      <FormRow label="Confirm password" error={errors.passwordConfirm}>
        <input
          type="password"
          id="passwordConfirm"
          autoComplete="new-password"
          required
          {...register('passwordConfirm')}
        />
      </FormRow>
      <FormRow>
        <button type="submit" disabled={mutation.isPending}>
          {mutation.isPending ? 'Sending Data...' : 'Sign Up Now'}
        </button>
      </FormRow>
    </form>
  );
};
