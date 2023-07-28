import { Pipe, PipeTransform } from '@angular/core';
import { TaskState } from '../@enum/task-state';

@Pipe({
  name: 'liClass',
})
export class LiClassPipe implements PipeTransform {
  className: string[] = [];

  transform(state: TaskState): string {
    return state === TaskState.Finish ? 'checked' : '';
  }
}
