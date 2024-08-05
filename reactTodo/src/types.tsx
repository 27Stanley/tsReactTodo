export type Task = {
  id?: string;
  title: string;
  completed: boolean;
  createdAt: Date;
};

export type RoutineTask = {
  id: number;
  time: string;
  descriptions: RoutineTaskDescription[];
};

export type RoutineTaskDescription = {
  task: string;
  completed: boolean;
};
