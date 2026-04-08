type Complexity = 'Beginner' | 'Middle' | 'Advanced';

export type Topic = {
  id: string;
  title: string;
  complexity: Complexity;
  exercisesCount: number;
};

export type Course = {
  id: string;
  title: string;
  introduction: string;
  description: string;
  topics: Topic[];
};
