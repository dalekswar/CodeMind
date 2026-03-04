import type { Review } from '../../../../types/about-us.types';

import styles from './review-card.module.css';

type ReviewCardProps = {
  review: Review;
};

export function ReviewCard({ review }: ReviewCardProps) {
  const { name, info, text } = review;
  return (
    <div className={styles.reviewCard}>
      <p className={styles.reviewText}>{text}</p>
      <div>
        <div className={styles.reviewName}>{name}</div>
        <small className={styles.reviewInfo}>{info}</small>
      </div>
    </div>
  );
}
