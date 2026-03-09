import type { ReactNode } from 'react';
import { NavLink } from 'react-router-dom';

type Props = {
  to: string;
  className?: string;
  children: ReactNode;
};

export const AppNavLink = ({ to, className = '', children }: Props) => {
  return (
    <NavLink to={to} className={({ isActive }) => `${className} ${isActive ? 'active' : ''}`}>
      {children}
    </NavLink>
  );
};
