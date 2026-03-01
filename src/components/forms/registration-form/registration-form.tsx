import type { FC } from 'react';
import { Form } from 'react-router-dom';
import { FormRow } from '../form-row';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const registrationSchema = z
  .object({
    email: z.string().email('Invalid email format'),
    login: z
      .string()
      .min(5, 'Login must be at least 5 characters')
      .max(30, 'Login must be at most 30 characters')
      .regex(/^[A-Za-z0-9_-]+$/, 'Login can contain letters, numbers, _ and - only'),
    password: z
      .string()
      .min(8, 'Password must be at least 8 characters')
      .max(30, 'Password must be at most 30 characters')
      .regex(
        /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d!@#$&_+.-]+$/,
        'Password must contain at least one uppercase letter and one number, no spaces or Cyrillic'
      ),
    passwordConfirm: z.string(),
  })
  .refine(data => data.password === data.passwordConfirm, {
    message: 'Passwords must match',
    path: ['passwordConfirm'],
  });

type RegistrationFormValues = z.infer<typeof registrationSchema>;

export const RegistrationForm: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegistrationFormValues>({ resolver: zodResolver(registrationSchema) });
  console.log(errors);

  function onSubmit(data: RegistrationFormValues) {
    console.log('submit', data);
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
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
        <button type="submit">Sign Up Now</button>
      </FormRow>
    </Form>
  );
};
