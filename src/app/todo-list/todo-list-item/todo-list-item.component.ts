import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TaskState } from '../@enum/task-state';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.css'],
})
export class TodoListItemComponent implements OnInit {
  @Input() taskId: number = -1;
  @Input() content: string = '';
  @Input() state: TaskState = TaskState.Active;
  @Output() onTaskStateChange = new EventEmitter<{
    id: number;
    state: TaskState;
  }>();

  cancelIcon = '\u00D7';

  ngOnInit(): void {}

  toggleTask() {
    this.onTaskStateChange.emit({
      id: this.taskId,
      state:
        this.state === TaskState.Active ? TaskState.Finish : TaskState.Active,
    });
  }

  closeTask() {
    this.onTaskStateChange.emit({
      id: this.taskId,
      state: TaskState.Cancel,
    });
  }
}
