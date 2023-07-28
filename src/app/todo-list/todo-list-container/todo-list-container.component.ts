import { Component, OnInit, SimpleChanges } from '@angular/core';
import { TodoTask } from '../@models/todo.model';
import { TaskState } from '../@enum/task-state';

@Component({
  selector: 'app-todo-list-container',
  templateUrl: './todo-list-container.component.html',
  styleUrls: ['./todo-list-container.component.css'],
})
export class TodoListContainerComponent implements OnInit {
  constructor() {}

  todoList: TodoTask[] = [];

  ngOnInit(): void {
    this.todoList = [
      {
        id: 1,
        content: 'Hit the gym',
        state: TaskState.Active,
      },
      {
        id: 2,
        content: 'Pay bills',
        state: TaskState.Finish,
      },
      {
        id: 3,
        content: 'Meet George',
        state: TaskState.Active,
      },
      {
        id: 4,
        content: 'Buy eggs',
        state: TaskState.Active,
      },
      {
        id: 5,
        content: 'Read a book',
        state: TaskState.Active,
      },
      {
        id: 6,
        content: 'Organize Office',
        state: TaskState.Active,
      },
    ];
  }

  addTask(taskContent: string) {
    this.todoList = [
      ...this.todoList,
      {
        id: this.todoList.length + 1,
        content: taskContent,
        state: TaskState.Active,
      },
    ];
  }

  changeTaskState({ id: targetId, state }: { id: number; state: TaskState }) {
    const newTodoList = [...this.todoList];
    let targetTaskIndex = newTodoList.findIndex(({ id }) => id === targetId);
    if (targetTaskIndex < 0) {
      throw new Error('can not find task');
    }
    newTodoList[targetTaskIndex] = {
      ...newTodoList[targetTaskIndex],
      state,
    };
    this.todoList = newTodoList;
  }
}
