import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todo-list-input',
  templateUrl: './todo-list-input.component.html',
  styleUrls: ['./todo-list-input.component.css'],
})
export class TodoListInputComponent implements OnInit {
  constructor() {}

  inputValue = '';
  @Output() addTaskEvent = new EventEmitter<string>();

  ngOnInit(): void {}

  addTask() {
    if (this.inputValue === '') {
      alert('You must write something!');
      return;
    }
    this.addTaskEvent.emit(this.inputValue);
    this.inputValue = '';
  }
}
