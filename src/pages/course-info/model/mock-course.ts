import type { Course } from './types';

export const MOCK_COURSE: Course = {
  id: 'js-advanced',
  title: 'JavaScript Advanced',
  introduction:
    'Глубокое погружение в механизмы языка: от базового синтаксиса до архитектуры сложных систем.',
  description:
    'Этот курс разработан для тех, кто хочет не просто писать код, а понимать, как он работает «под капотом». Мы разберем внутреннее устройство движка V8, механизмы управления памятью и современные стандарты разработки.',
  topics: [
    {
      id: 'es6',
      title: 'Синтаксис ES6-ESNext и стандарты TC39',
      complexity: 'Middle',
      exercisesCount: 12,
    },
    {
      id: 'scope',
      title: 'Scope, Closures и Execution Context',
      complexity: 'Middle',
      exercisesCount: 10,
    },
    {
      id: 'prototypes',
      title: 'Prototypes, Classes и ООП в JavaScript',
      complexity: 'Middle',
      exercisesCount: 8,
    },
    {
      id: 'async',
      title: 'Asynchronous JS: Event Loop в деталях',
      complexity: 'Advanced',
      exercisesCount: 9,
    },
    {
      id: 'architecture',
      title: 'Архитектура и паттерны проектирования',
      complexity: 'Advanced',
      exercisesCount: 11,
    },
  ],
} as const;
