import type { Review } from '../types/about-us';

export const reviews: Review[] = [
  {
    id: 1,
    name: 'Мария Петрова',
    info: 'Lead Frontend at Yandex',
    text: '"Лучшее объяснение Event Loop, которое я встречала. Теперь в коде нет магии, только логика."',
  },
  {
    id: 2,
    name: 'Алексей Иванов',
    info: 'Senior Dev at Google',
    text: '"Инвестиция, которая окупилась за один оффер. Контент действительно профессионального уровня."',
  },
  {
    id: 3,
    name: 'Дмитрий Соколов',
    info: 'Tech Lead at Tinkoff',
    text: '"React Architecture — это маст-хэв для тех, кто хочет писать масштабируемый код."',
  },
  {
    id: 4,
    name: 'Екатерина Волкова',
    info: 'Fullstack Developer at Avito',
    text: '"Node.js & Backend дал именно те знания, которых не хватало. Безопасность, оптимизация, архитектура — все в одном курсе."',
  },
  {
    id: 5,
    name: 'Павел Морозов',
    info: 'Senior Frontend at Ozon',
    text: '"Глубокий JavaScript раскрыл такие тонкости, о которых я даже не подозревал после 5 лет коммерческой разработки."',
  },
] as const;
