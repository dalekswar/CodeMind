import type { FC, ReactElement } from 'react';
import type { FieldError } from 'react-hook-form';

type Props = {
  label?: string;
  error?: FieldError;
  children: ReactElement<{ id?: string }>;
};

export const FormRow: FC<Props> = ({ label, error, children }) => {
  return (
    <div>
      {label && <label htmlFor={children.props.id}>{label}</label>}
      {children}
      {error && <span>{error.message}</span>}
    </div>
  );
};
