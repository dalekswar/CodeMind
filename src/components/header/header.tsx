import { NavLink, useLocation } from 'react-router-dom';
import styles from './header.module.css';
import { HeaderBreadcrumbs } from '../breadcrumbs';
import { useIsAuth } from '../../redux/hooks/useIsAuth';
import { Paths } from '../../constants/paths';
import { useGetUserByLoginQuery } from '../../redux/api/usersAPI';

export const Header = () => {
  const { pathname } = useLocation();
  const isAuth = useIsAuth();
  const { data, isFetching } = useGetUserByLoginQuery(undefined, {
    skip: !isAuth,
  });

  const getNavLinkClass = ({ isActive }: { isActive: boolean }) =>
    `${styles.link} ${isActive ? styles.active : ''}`;

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles.list}>
          <li className={styles.itemLogo}>
            <NavLink to={Paths.ROOT} className={styles.logo}>
              CodeMind
            </NavLink>
          </li>

          <li>
            <NavLink to={Paths.ABOUT_US} className={getNavLinkClass}>
              About Us
            </NavLink>
          </li>

          {isAuth && (
            <li>
              <NavLink to={Paths.DASHBOARD} className={getNavLinkClass}>
                Dashboard
              </NavLink>
            </li>
          )}

          <li
            className={`${styles.itemCrumbs} ${pathname.startsWith(Paths.COURSES) ? styles.active : ''}`}
          >
            <HeaderBreadcrumbs />
          </li>

          <li className={styles.itemAuth}>
            {!isFetching && !isAuth && (
              <NavLink to={Paths.REGISTER} className={`${styles.link} ${styles.linkJoin}`}>
                Join Now
              </NavLink>
            )}

            {data && (
              <NavLink to={Paths.PROFILE} className={getNavLinkClass}>
                <span>{data.login}</span>
                <div className={styles.userLogo}>{data.login[0]}</div>
              </NavLink>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};
