import { NavLink, useLocation } from 'react-router-dom';
import styles from './breadcrumbs.module.css';

import { Fragment } from 'react/jsx-runtime';
import { Paths } from '../../constants';
import { useBreadcrumbs } from './hooks/use-breadcrumbs';

export const HeaderBreadcrumbs = () => {
  const { pathname } = useLocation();
  const crumbs = useBreadcrumbs();
  return (
    <>
      {crumbs.map(({ name, path }, index) => {
        return (
          <Fragment key={path}>
            {index === 0 ? '' : <span> /</span>}
            <NavLink
              to={path}
              className={`${styles.link}  ${pathname === path || pathname === `${Paths.COURSES}/${Paths.MY_COURSES}` || pathname === `${Paths.COURSES}/${Paths.ALL_COURSES}` ? styles.active : ''}`}
            >
              {name}
            </NavLink>
          </Fragment>
        );
      })}
    </>
  );
};
