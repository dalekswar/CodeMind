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

export const createCrumbsPath = (pathname: string): Crumb[] => {
  const pathnameParams = pathname.split('/').filter(Boolean);

  const crumbs: Crumb[] = [];

  pathnameParams
    .filter((value) => value !== 'my' && value !== 'all')
    .forEach((param, index) => {
      const path = '/' + pathnameParams.slice(0, index + 1).join('/');
      if (index === 2 && param !== 'topics') {
        crumbs.push({
          name: 'topics',
          path: '/' + [...pathnameParams.slice(0, 2), 'topics'].join('/'),
        });
      }
      crumbs.push({
        name: param,
        path,
      });
    });

  return crumbs;
};
