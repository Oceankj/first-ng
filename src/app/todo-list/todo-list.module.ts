import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListInputComponent } from './todo-list-input/todo-list-input.component';
import { TodoListItemComponent } from './todo-list-item/todo-list-item.component';
import { TodoListContainerComponent } from './todo-list-container/todo-list-container.component';

@NgModule({
  declarations: [
    TodoListInputComponent,
    TodoListItemComponent,
    TodoListContainerComponent,
  ],
  imports: [CommonModule],
})
export class TodoListModule {}
