import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScrollingComponent } from './components/scrolling/scrolling.component';
import { ShowsComponent } from './components/shows/shows.component';

const routes: Routes = [
  { component: ScrollingComponent, path: '', pathMatch: 'full'},
  { component: ShowsComponent, path: 'show', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
