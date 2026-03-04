import codeMindImg from './assets/codemind.webp';

import styles from './about-section.module.css';

export function AboutSection() {
  return (
    <section className={styles.about}>
      <div>
        <h2 className={styles.aboutTitle}>Платформа для профессионалов</h2>
        <p className={styles.aboutMotivation}>
          Мы верим, что обучение должно быть фундаментальным. CodeMind фокусируется на темах,
          которые формируют инженерное мышление.
        </p>
        <ul className={styles.featuresList}>
          <li className={styles.featuresItem}>100+ часов глубокого контента</li>
          <li className={styles.featuresItem}>Практические кейсы из реальных проектов</li>
          <li className={styles.featuresItem}>Подготовка к интервью в BigTech</li>
        </ul>
      </div>
      <div className={styles.aboutVisual}>
        <img
          className={styles.aboutImage}
          src={codeMindImg}
          alt="CodeMind learning platform interface"
          loading="lazy"
          width="500"
          height="333"
        />
      </div>
    </section>
  );
}
