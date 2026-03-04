import type { Direction } from '../types/about-us.types';

export const directions: Direction[] = [
  {
    id: 1,
    icon: '🚀',
    tag: 'Advanced',
    title: 'Deep JavaScript',
    description: 'Scope, Closures, Prototypes и Event Loop на уровне Senior-разработчика.',
  },
  {
    id: 2,
    icon: '⚛️',
    tag: 'Frameworks',
    title: 'React Architecture',
    description: 'Проектирование стейта, оптимизация производительности и масштабирование.',
  },
  {
    id: 3,
    icon: '🛠️',
    tag: 'Fullstack',
    title: 'Node.js & Backend',
    description: 'Архитектура API, работа с БД и безопасность современных приложений.',
  },
] as const;
