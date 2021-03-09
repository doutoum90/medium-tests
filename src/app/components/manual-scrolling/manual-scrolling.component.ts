import { AfterViewChecked, ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import * as faker from 'faker';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-manual-scrolling',
  templateUrl: './manual-scrolling.component.html',
  styleUrls: ['./manual-scrolling.component.scss']
})
export class ManualScrollingComponent implements OnInit, AfterViewChecked {
  @ViewChild('blockItemsContainer', { read: ViewContainerRef })
  container!: ViewContainerRef;
  @ViewChild('blockItem', { read: TemplateRef })
  template!: TemplateRef<any>;

  @ViewChild('itemsContainer', { read: ViewContainerRef })
  itemsContainer!: ViewContainerRef;
  @ViewChild('itemsRef', { read: TemplateRef })
  itemsRef!: TemplateRef<any>;

  persons: any[] = [];
  @Output() showEvent: EventEmitter<any> = new EventEmitter();
  @Output() removeEvent: EventEmitter<any> = new EventEmitter();
  constructor(private readonly userService: UserService,
    private readonly cdref: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.persons = this.userService.getUsers(10);
  }
  
  ngAfterViewChecked() {
    this.buildData(20);
    this.cdref.detectChanges();
  }

  private buildData(length: number) {
    const pers = this.userService.getUsers(500);
    const start = pers.length;
    const end = start + length;
    for (let n = start; n <= end; n++) {
      this.itemsContainer.createEmbeddedView(this.itemsRef, {
        item: pers[n-pers.length],
        isEven: n % 2 === 0
      });
    }
  }

  show(person: any): void {
    this.showEvent.emit(person);
  }

  remove(person: any): void {
    this.removeEvent.emit(person);
  }

}
