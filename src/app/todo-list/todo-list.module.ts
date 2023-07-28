import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListInputComponent } from './todo-list-input/todo-list-input.component';
import { TodoListItemComponent } from './todo-list-item/todo-list-item.component';
import { TodoListContainerComponent } from './todo-list-container/todo-list-container.component';
import { FormsModule } from '@angular/forms';
import { LiClassPipe } from './todo-list-item/li-class.pipe';
import { FilterCancelTaskPipe } from './todo-list-container/filter-cancel-task.pipe';

@NgModule({
  declarations: [
    TodoListInputComponent,
    TodoListItemComponent,
    TodoListContainerComponent,
    LiClassPipe,
    FilterCancelTaskPipe,
  ],
  imports: [CommonModule, FormsModule],
  exports: [TodoListContainerComponent],
})
export class TodoListModule {}
