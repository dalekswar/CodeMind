import { FormRow } from '../form-row';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { registrationSchema, type RegistrationFormValues } from './registration.schema';
import { useMutation } from '@tanstack/react-query';
import { signUpUser } from '../../../api';
import type { ApiError, RegistrationSuccessResponse, SignUpRequest } from '../../../types';
import { singleToast } from '../../../utils/toast.util';
import { AuthForm } from '../auth-form';
import { useNavigate } from 'react-router-dom';
import { Paths } from '../../../app/router';

export const RegistrationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegistrationFormValues>({ resolver: zodResolver(registrationSchema) });
  const navigate = useNavigate();
  const mutation = useMutation<RegistrationSuccessResponse, ApiError, SignUpRequest>({
    mutationKey: ['signUpUser'],
    mutationFn: signUpUser,
    onSuccess: () => {
      navigate(Paths.LOGIN);
      singleToast(`Регистрация прошла успешно!`, 'success');
    },
    onError: err => singleToast(`${err.message || err}`, 'error'),
  });

  function onSubmit(data: RegistrationFormValues) {
    mutation.mutate(data);
  }

  return (
    <AuthForm
      onSubmit={handleSubmit(onSubmit)}
      isPending={mutation.isPending}
      submitMessage="Sign Up"
    >
      <FormRow label="Email" error={errors.email}>
        <input type="email" id="email" placeholder="your@email.com" {...register('email')} />
      </FormRow>

      <FormRow label="Login" error={errors.login}>
        <input type="text" id="login" placeholder="SuperUser" {...register('login')} />
      </FormRow>

      <FormRow label="Password" error={errors.password}>
        <input type="password" id="password" placeholder="••••••••" {...register('password')} />
      </FormRow>

      <FormRow label="Confirm password" error={errors.passwordConfirm}>
        <input
          type="password"
          id="passwordConfirm"
          placeholder="••••••••"
          {...register('passwordConfirm')}
        />
      </FormRow>
    </AuthForm>
  );
};
