import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import styles from './auth-layout.module.css';

type Props = {
  children: ReactNode;
  title: string;
  subtitle: string;
  footerText: string;
  footerLinkText: string;
  footerLinkTo: string;
};

export const AuthLayout = ({
  children,
  title,
  subtitle,
  footerText,
  footerLinkText,
  footerLinkTo,
}: Props) => {
  return (
    <div className={styles.auth}>
      <section className={styles.auth__card}>
        <div className={styles.auth__logo}>CodeMind</div>

        <h1 className={styles.auth__title}>{title}</h1>
        <p className={styles.auth__subtitle}>{subtitle}</p>

        {children}

        <p className={styles.auth__footer}>
          {footerText}{' '}
          <Link to={footerLinkTo} className={styles.auth__link}>
            {footerLinkText}
          </Link>
        </p>
      </section>
    </div>
  );
};
