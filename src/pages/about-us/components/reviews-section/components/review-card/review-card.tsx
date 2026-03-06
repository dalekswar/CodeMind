import type { Review } from '../../../../types/about-us';

import styles from './review-card.module.css';

export const ReviewCard = ({ name, info, text }: Review) => (
  <div className={styles.reviewCard}>
    <p className={styles.reviewText}>{text}</p>
    <div>
      <div className={styles.reviewName}>{name}</div>
      <small className={styles.reviewInfo}>{info}</small>
    </div>
  </div>
);
