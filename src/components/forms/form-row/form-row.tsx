import type { FC, ReactElement } from 'react';

type Props = {
  label?: string;
  error?: string;
  children: ReactElement<{ id?: string }>;
};

export const FormRow: FC<Props> = ({ label, error, children }) => {
  return (
    <div>
      {label && <label htmlFor={children.props.id}>{label}</label>}
      {children}
      {error && <span>{error}</span>}
    </div>
  );
};
