import { ChangeDetectorRef } from '@angular/core';
import { Component, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-progressive-scrolling',
  templateUrl: './progressive-scrolling.component.html',
  styleUrls: ['./progressive-scrolling.component.scss']
})
export class ProgressiveScrollingComponent implements OnInit {

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
    this.persons = this.userService.getUsers(1000);
  }
  
  ngAfterViewChecked() {
    this.buildData(20);
    this.cdref.detectChanges();
  }

  private buildData(length: number) {
    const ITEMS_RENDERED_AT_ONCE = 500;
    const INTERVAL_IN_MS = 10;
  
    let currentIndex = 0;
  
    const interval = setInterval(() => {
      const nextIndex = currentIndex + ITEMS_RENDERED_AT_ONCE;
  
      for (let n = currentIndex; n <= nextIndex ; n++) {
        if (n >= length) {
          clearInterval(interval);
          break;
        }
        this.itemsContainer.createEmbeddedView(this.itemsRef, {
          item: this.persons[n],
          isEven: n % 2 === 0
        });
      }
  
      currentIndex += ITEMS_RENDERED_AT_ONCE;
    }, INTERVAL_IN_MS);

  }

  show(person: any): void {
    this.showEvent.emit(person);
  }

  remove(person: any): void {
    this.removeEvent.emit(person);
  }

}
