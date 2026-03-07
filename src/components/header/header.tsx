import { NavLink, useLocation } from 'react-router-dom';
import styles from './header.module.css';
import { Paths } from '../../app/router';
import { HeaderBreadcrumbs } from '../breadcrumbs';

export const Header = () => {
  const { pathname } = useLocation();

  const isBreadcrumbsActive = pathname.startsWith(Paths.COURSES);

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles.list}>
          <li className={styles.itemLogin}>
            <NavLink to={Paths.ROOT} className={styles.logo}>
              CodeMind
            </NavLink>
          </li>

          <li
            className={`${styles.item} ${styles.aboutLink} ${pathname === Paths.ABOUT_US ? styles.active : ''}`}
          >
            <NavLink to={Paths.ABOUT_US} className={styles.link}>
              About Us
            </NavLink>
          </li>

          <li className={`${styles.item} ${isBreadcrumbsActive ? styles.active : ''}`}>
            <HeaderBreadcrumbs />
          </li>

          <li className={`${styles.item} ${styles.itemJoin}`}>
            <NavLink to={Paths.REGISTER} className={`${styles.link}`}>
              Join Now
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
