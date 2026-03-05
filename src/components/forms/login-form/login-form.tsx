import type { ApiError, LoginRequest } from '../../../types';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema } from './login.schema';
import { auth } from '../../../redux/reducers';
import { singleToast } from '../../../utils/toast.util';
import { FormRow } from '../form-row';
import { AuthForm } from '../auth-form';
import { useLoginUserMutation } from '../../../redux/api/usersAPI';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const [loginUser, { isLoading }] = useLoginUserMutation();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<LoginRequest>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (authData: LoginRequest) => {
    try {
      const data = await loginUser(authData).unwrap();
      singleToast(data.message, 'success');
      dispatch(auth({ accessToken: data.access }));
    } catch (error) {
      singleToast((error as { data: ApiError })?.data?.message || 'Failed to login', 'error');
    }
  };

  return (
    <AuthForm onSubmit={handleSubmit(onSubmit)} isLoading={isLoading} submitMessage="Login">
      <FormRow label="Login" error={errors.login}>
        <input type="text" placeholder="SuperUser" {...register('login')} />
      </FormRow>

      <FormRow label="Password" error={errors.password}>
        <input type="password" placeholder="••••••••" {...register('password')} />
      </FormRow>
    </AuthForm>
  );
};
