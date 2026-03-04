import { Link } from 'react-router-dom';

import styles from './hero-section.module.css';

export function HeroSection() {
  return (
    <section className={styles.hero}>
      <h1 className={styles.heroTitle}>Master Modern Development</h1>
      <p className={styles.description}>
        Углубленные курсы для инженеров. Повышайте квалификацию через понимание внутренних
        механизмов технологий.
      </p>
      <Link to={'/courses'} className={styles.btnLink}>
        Смотреть курсы
      </Link>
    </section>
  );
}
