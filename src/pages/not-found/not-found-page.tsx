import { Paths } from '../../app/router/paths';
import { LinkButton } from '../../components/link-button';

import notFoundImg from './assets/not-found.webp';
import styles from './not-found-page.module.css';

export function NotFoundPage() {
  return (
    <section className={styles.notFound}>
      <img src={notFoundImg} alt="Page was not found" width="900" height="600" />
      <LinkButton to={Paths.ROOT}>Back to Home</LinkButton>
    </section>
  );
}
