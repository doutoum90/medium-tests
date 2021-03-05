import {ContentChildren, Directive, QueryList} from '@angular/core';
import { TabsItemDirective } from './tab-item.directive';
 
@Directive({
 selector: 'tabs-items'
})
export class TabsItemsDirective {
 @ContentChildren(TabsItemDirective, { descendants: true })
  public items!: QueryList<TabsItemDirective>;
 
 constructor() {
 }
}