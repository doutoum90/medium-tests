import { Component, ContentChild, OnInit } from '@angular/core';
import { TabsItemsDirective } from '../../directives/tabs-items.directive';

@Component({
  selector: 'app-tab-wrapper',
  templateUrl: './tab-wrapper.component.html',
  styleUrls: ['./tab-wrapper.component.scss']
})
export class TabWrapperComponent implements OnInit {
  @ContentChild(TabsItemsDirective)
  public tabItems!: TabsItemsDirective;
  
  constructor() { }
  
  ngOnInit() {
  }

}
