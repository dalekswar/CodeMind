import type { ReactElement } from 'react';
import type { FieldError } from 'react-hook-form';
import styles from './form-row.module.css';

type Props = {
  label?: string;
  error?: FieldError;
  children: ReactElement<{ id?: string }>;
};

export const FormRow = ({ label, error, children }: Props) => {
  return (
    <div className={styles.row}>
      {label && (
        <label className={styles.row__label} htmlFor={children.props.id}>
          {label}
        </label>
      )}
      {children}
      {error && <span className={styles.row__error}>{error.message}</span>}
    </div>
  );
};
