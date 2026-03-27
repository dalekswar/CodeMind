import styles from './course-header.module.css';

type HeaderProperties = {
  title: string;
  introduction: string;
};

export const CourseHeader = ({ title, introduction }: HeaderProperties) => (
  <>
    <h1 className={styles.coursePageTitle}>{title}</h1>
    <p className={styles.courseIntroduction}>{introduction}</p>
  </>
);
