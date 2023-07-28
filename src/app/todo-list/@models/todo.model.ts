import { TaskState } from '../@enum/task-state';

export interface TodoTask {
  id: number;
  content: string;
  state: TaskState;
}
