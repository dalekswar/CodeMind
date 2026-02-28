import type { FC } from 'react';
import { Form } from 'react-router-dom';
import { FormRow } from '../form-row';

export const RegistrationForm: FC = () => {
  return (
    <Form>
      <FormRow label="Full Name">
        <input type="text" id="login" autoComplete="username" />
      </FormRow>
      <FormRow label="Password">
        <input type="password" id="password" autoComplete="new-password" />
      </FormRow>
      <FormRow label="Confirm password">
        <input type="password" id="passwordConfirm" autoComplete="new-password" />
      </FormRow>
      <FormRow>
        <button>Get Started</button>
      </FormRow>
    </Form>
  );
};
