import { NavLink, useLocation } from 'react-router-dom';
import styles from './breadcrumbs.module.css';
import { createCrumbsPath } from '../../utils/crumbs-path';
import { Fragment } from 'react/jsx-runtime';

export const HeaderBreadcrumbs = () => {
  const { pathname } = useLocation();
  const crumbs = createCrumbsPath(pathname);
  console.log(crumbs);

  return (
    <>
      {crumbs.map(({ name, path }, index) => (
        <Fragment key={index}>
          {index === 0 ? '' : <span> /</span>}
          <NavLink
            end
            to={path}
            className={({ isActive }) => `${styles.link}  ${isActive ? styles.active : ''}`}
          >
            {name}
          </NavLink>
        </Fragment>
      ))}
    </>
  );
};
