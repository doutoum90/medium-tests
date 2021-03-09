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
    ProgressiveScrollingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ScrollingModule,
    TabsModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
