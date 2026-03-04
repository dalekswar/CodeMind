import { DirectionCard } from './components/direction-card';

import { directions } from '../../constants/directions';

import styles from './directions-section.module.css';
import titleStyles from '../../../../app/styles/ui/title.module.css';

export function DirectionsSection() {
  return (
    <section className={styles.directions}>
      <h2 className={`${titleStyles.sectionTitle} ${titleStyles['sectionTitle--withLine']}`}>
        Популярные направления
      </h2>
      <ul className={styles.directionsList}>
        {directions.map(direction => (
          <li key={direction.id}>
            <DirectionCard direction={direction} />
          </li>
        ))}
      </ul>
    </section>
  );
}
