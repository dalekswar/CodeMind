import type { Topic } from '../../model/types';

import styles from './course-content.module.css';

type ContentProperties = {
  description: string;
  topics: Topic[];
  activeTopicId: string;
  onSelectTopic: (id: string) => void;
};

export const CourseContent = ({
  description,
  topics,
  activeTopicId,
  onSelectTopic,
}: ContentProperties) => {
  return (
    <section className={styles.course}>
      <h2 className={styles.courseAboutTitle}>О курсе</h2>
      <p className={styles.courseDescription}>{description}</p>
      <ul className={styles.courseTopicsList}>
        {topics.map((topic) => {
          const isActive = topic.id === activeTopicId;

          return (
            <li key={topic.id}>
              <button
                className={`${styles.courseTopic} ${isActive ? styles.activeTopic : ''}`.trim()}
                onClick={() => onSelectTopic(topic.id)}
              >
                {topic.title}
              </button>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
