import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ScrollingModule } from '@angular/cdk/scrolling';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TabsModule } from 'ngx-bootstrap/tabs';
import { TodosComponent } from './components/todos/todos.component';
import { TabWrapperComponent } from './components/tab-wrapper/tab-wrapper.component';
import { TabsItemDirective } from './directives/tab-item.directive';
import { TabsItemsDirective } from './directives/tabs-items.directive';
import { BindQueryParamDirective } from './directives/bind-query-param.directive';
import { ScrollingComponent } from './components/scrolling/scrolling.component';
import { ShowsComponent } from './components/shows/shows.component';
import { VirtualScrollingComponent } from './components/virtual-scrolling/virtual-scrolling.component';
import { ManualScrollingComponent } from './components/manual-scrolling/manual-scrolling.component';
import { ProgressiveScrollingComponent } from './components/progressive-scrolling/progressive-scrolling.component';
import { TodoComponent } from './components/todo/todo.component';
import { TodoService } from './services/todo.service';
import { Observable, of } from 'rxjs';
import { TodosModel, TodosModel2 } from './models/todos.model';
import { HttpClientModule } from '@angular/common/http';

export class TodoServiceMock {
  get(): Observable<TodosModel2[]> {
    return of(todos)
  }
}

const todos: TodosModel2[]= [
  { title: 'name1', id: 1, completed: true },
  { title: 'name2', id: 2, completed: false },
  { title: 'name3', id: 3, completed: true },
  { title: 'name4', id: 4, completed: false },
  { title: 'name5', id: 5, completed: true },
]

@NgModule({
  declarations: [
    AppComponent,
    TabWrapperComponent,
    TodosComponent,
    TabsItemsDirective,
    TabsItemDirective,
    BindQueryParamDirective,
    ScrollingComponent,
    ShowsComponent,
    VirtualScrollingComponent,
    ManualScrollingComponent,
    ProgressiveScrollingComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ScrollingModule,
    TabsModule.forRoot()
  ],
  providers: [
    /* {
      provide: TodoService, 
      useClass: TodoServiceMock
    } */
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


