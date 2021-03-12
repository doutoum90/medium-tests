import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataTableComponent } from './components/data-table/data-table.component';
import { ScrollingComponent } from './components/scrolling/scrolling.component';
import { ShowsComponent } from './components/shows/shows.component';
import { TodoComponent } from './components/todo/todo.component';

const routes: Routes = [
  { component: ScrollingComponent, path: '', pathMatch: 'full'},
  { component: ShowsComponent, path: 'show', pathMatch: 'full'},
  { component: TodoComponent, path: 'todos', pathMatch: 'full'},
  { component: DataTableComponent, path: 'data-table', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
