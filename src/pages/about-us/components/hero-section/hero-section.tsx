import { Link } from 'react-router-dom';

import { HERO_TEXTS } from '../../constants/texts/hero-texts';

import styles from './hero-section.module.css';

export const HeroSection = () => (
  <section className={styles.hero}>
    <h1 className={styles.heroTitle}>{HERO_TEXTS.title}</h1>
    <p className={styles.description}>{HERO_TEXTS.description}</p>
    <Link to={'/courses'} className={styles.btnLink}>
      {HERO_TEXTS.ctaText}
    </Link>
  </section>
);
