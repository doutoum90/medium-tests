import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TabsModule } from 'ngx-bootstrap/tabs';
import { TodosComponent } from './components/todos/todos.component';
import { TabWrapperComponent } from './components/tab-wrapper/tab-wrapper.component';
import { TabsItemDirective } from './directives/tab-item.directive';
import { TabsItemsDirective } from './directives/tabs-items.directive';
import { BindQueryParamDirective } from './directives/bind-query-param.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TabWrapperComponent,
    TodosComponent,
    TabsItemsDirective,
    TabsItemDirective,
    BindQueryParamDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    TabsModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
