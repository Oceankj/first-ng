import { Pipe, PipeTransform } from '@angular/core';
import { TodoTask } from '../@models/todo.model';
import { TaskState } from '../@enum/task-state';

@Pipe({
  name: 'filterCancelTask',
})
export class FilterCancelTaskPipe implements PipeTransform {
  transform(todoList: TodoTask[]): TodoTask[] {
    return todoList.filter(({ state }) => state !== TaskState.Cancel);
  }
}
