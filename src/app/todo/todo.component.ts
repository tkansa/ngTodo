import { i18nMetaToDocStmt } from '@angular/compiler/src/render3/view/i18n/meta';
import { Component, OnInit } from '@angular/core';
import { Todo } from '../interfaces/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  todos: Todo[] = [
    { task: 'Make viral TikTok', completed: false },
    { task: 'Finish Todo App', completed: false },
    { task: 'Feed Fluffy', completed: true },
    { task: 'Change sweatsuit', completed: false },
  ];

  newTodo: string;
  filterText: string = '';
  todo: Todo;

  addTodo = function (): void {
    this.todo = {
      task: this.newTodo,
      completed: false,
    };
    this.todos.push(this.todo);
    this.newTodo = '';
  };

  completeTodo = function (todo: Todo): void {
    todo.completed = true;
  };

  filter = function (): Todo[] {
    return this.todos.filter((t) => t.task.includes(this.filterText));
  };

  removeTodo = function (todo: Todo): void {
    let index: number = this.todos.findIndex(t => t.task === todo.task);
    this.todos.splice(index, 1);
  };

  constructor() {}

  ngOnInit(): void {}
}
