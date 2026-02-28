import type { FC } from 'react';
import { RegistrationForm } from '../../../components/forms/registration-form';

export const RegisterPage: FC = () => {
  return (
    <>
      <section>
        <p>CodeMind</p>
        <h1>Create Account</h1>
        <p>Начните обучение и станьте частью сообщества профи</p>
      </section>

      <section>
        <RegistrationForm />
      </section>
    </>
  );
};
