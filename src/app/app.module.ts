import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabsItemsDirective } from './tabs-items.directive';
import { TabsItemDirective } from './tab-item.directive';
import { TabWrapperComponent } from './tab-wrapper/tab-wrapper.component';

import { AlertModule } from 'ngx-bootstrap/alert';
import { TabsModule } from 'ngx-bootstrap/tabs';

@NgModule({
  declarations: [
    AppComponent,
    TabsItemsDirective,
    TabsItemDirective,
    TabWrapperComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    AlertModule.forRoot(),
    TabsModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
