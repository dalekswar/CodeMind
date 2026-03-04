import { Link } from 'react-router-dom';
import type { Direction } from '../../../../types/about-us.types';

import styles from './direction-card.module.css';

type DirectionCardProps = {
  direction: Direction;
};

export function DirectionCard({ direction }: DirectionCardProps) {
  const { id, icon, tag, title, description } = direction;
  return (
    <Link className={styles.directionCard} to={`/course/${id}`}>
      <article>
        <div className={styles.directionIcon}>{icon}</div>
        <div className={styles.directionInfo}>
          <span className={styles.directionTag}>{tag}</span>
          <h3 className={styles.directionTitle}>{title}</h3>
          <p className={styles.directionDescription}>{description}</p>
        </div>
      </article>
    </Link>
  );
}
