import type { FC } from 'react';
import { RegistrationForm } from '../../../components/forms/registration-form';
import { Link } from 'react-router-dom';
import { Paths } from '../../../app/router/paths';

export const RegisterPage: FC = () => {
  return (
    <>
      <section>
        <p>CodeMind</p>
        <h1>Create Account</h1>
        <p>Fill in your details to register</p>
        <RegistrationForm />
        <p>
          Already have an account? <Link to={Paths.LOGIN}>Log In</Link>
        </p>
      </section>
    </>
  );
};
