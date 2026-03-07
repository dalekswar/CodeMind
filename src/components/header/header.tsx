import { NavLink } from 'react-router-dom';
import { Paths } from '../../app/router/paths';
import styles from './header.module.css';

export const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles.list}>
          <li className={styles.logoItem}>
            <NavLink to={Paths.ROOT} className={styles.logo}>
              CodeMind
            </NavLink>
          </li>
          <li>
            <NavLink
              to={Paths.ABOUT_US}
              className={({ isActive }) =>
                `${styles.link} ${styles.aboutLink} ${isActive ? styles.active : ''}`
              }
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to={Paths.COURSES}
              className={({ isActive }) =>
                `${styles.link} ${styles.coursesLink} ${isActive ? styles.active : ''}`
              }
            >
              Courses
            </NavLink>
          </li>
          <li className={styles.joinItem}>
            <NavLink to={Paths.REGISTER} className={`${styles.link} ${styles.joinLink} `}>
              Join Now
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
