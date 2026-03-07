import type { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

import { Paths } from './paths';
import { useIsAuthSelector } from '../../redux/selectors';

interface Props {
  children: ReactNode;
}

export const AuthorizedOnlyRoute = ({ children }: Props) => {
  const isAuth = useIsAuthSelector();

  if (!isAuth) {
    return <Navigate to={Paths.REGISTER} replace />;
  }

  return <>{children}</>;
};
