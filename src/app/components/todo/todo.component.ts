import { Component, OnInit } from '@angular/core';
import { TodosModel } from 'src/app/models/todos.model';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  todos: TodosModel[] = [];
  constructor(private readonly todoService : TodoService) { }

  ngOnInit(): void {
    this.todoService.getAllTodos()
    .subscribe(todos => this.todos = todos);
  }

}
