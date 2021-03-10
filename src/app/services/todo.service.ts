import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { TodosModel } from '../models/todos.model';
import { TodosMapper } from '../models/todos.mapper';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private readonly http: HttpClient) { }

  get<T>(url: string, itemType: any): Observable<T> {
    return this.http.get<T>(url).pipe(
      map((data: any) => data.map((item: any) => new TodosMapper(itemType).map(item)))
    );
  }

  getAllTodos(): Observable<TodosModel[]> {
    return this.get<TodosModel[]>('http://localhost:4200/assets/todos.json', TodosModel);
  }
}
