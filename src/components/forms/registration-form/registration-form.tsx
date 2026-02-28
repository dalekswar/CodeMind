import type { FC } from 'react';
import { Form } from 'react-router-dom';
import { FormRow } from '../form-row';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const registrationSchema = z
  .object({
    username: z
      .string()
      .regex(/[a-zA-Z]+ [a-zA-Z]+/, "Full name must be in 'Firstname Lastname' format"),
    password: z
      .string()
      .regex(
        /^(?!.*[А-Яа-яЁё\s])(?=.*[A-Z])(?=.*\d)[A-Za-z\d!@#$&_+.-]{8,}$/,
        'Password must be at least 8 characters, contain uppercase letter and number'
      ),
    passwordConfirm: z
      .string()
      .regex(
        /^(?!.*[А-Яа-яЁё\s])(?=.*[A-Z])(?=.*\d)[A-Za-z\d!@#$&_+.-]{8,}$/,
        'Password must be at least 8 characters, contain uppercase letter and number'
      ),
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
      <FormRow label="Full Name" error={errors.username}>
        <input
          type="text"
          id="username"
          autoComplete="username"
          {...register('username')}
          required
        />
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
        <button type="submit">Get Started</button>
      </FormRow>
    </Form>
  );
};
