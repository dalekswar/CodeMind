import { Link } from 'react-router-dom';
import type { Direction } from '../../../../types/about-us';

import styles from './direction-card.module.css';

export const DirectionCard = ({ id, icon, tag, title, description }: Direction) => (
  <Link to={`/course/${id}`}>
    <article className={styles.directionCard}>
      <div className={styles.directionIcon}>{icon}</div>
      <div className={styles.directionInfo}>
        <span className={styles.directionTag}>{tag}</span>
        <h3 className={styles.directionTitle}>{title}</h3>
        <p className={styles.directionDescription}>{description}</p>
      </div>
    </article>
  </Link>
);
