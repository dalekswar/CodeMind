import { Paths } from '../app/router';

type PathParams = Partial<{
  courseId: string;
  topicId: string;
  widgetType: string;
  widgetId: string;
}>;
export const PATH_PARAMS = {
  COURSE_ID: ':courseId',
  TOPIC_ID: ':topicId',
  WIDGET_TYPE: ':widgetType',
  WIDGET_ID: ':widgetId',
} as const;

type Crumb = {
  name: string;
  path: string;
};
export const createCrumbsPath = (params: PathParams, pathname: string): Crumb[] => {
  const crumbs: Crumb[] = [];

  crumbs.push({ name: 'Courses', path: Paths.COURSES });
  const pathSegments = pathname.split('/').filter(Boolean);
  const hasTopics = pathSegments.includes('topics');

  if (params.courseId) {
    const coursePath = [Paths.COURSES, params.courseId].join('/');
    crumbs.push({ name: params.courseId, path: coursePath });
  }
  if (hasTopics || params.topicId) {
    const topicsPath = [Paths.COURSES, params.courseId, 'topics'].join('/');
    crumbs.push({ name: 'topics', path: topicsPath });
  }
  if (params.topicId) {
    const topicPath = [Paths.COURSES, params.courseId, params.topicId].join('/');
    crumbs.push({ name: params.topicId, path: topicPath });
  }

  if (params.widgetType) {
    const widgetPath = [
      Paths.COURSES,
      params.courseId,
      params.topicId,
      params.widgetType,
      params.widgetId || '',
    ].join('/');
    crumbs.push({ name: params.widgetType, path: widgetPath });
  }

  return crumbs;
};
