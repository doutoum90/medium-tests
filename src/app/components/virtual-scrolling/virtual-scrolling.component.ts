import { EventEmitter, Input, Output, Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-virtual-scrolling',
  templateUrl: './virtual-scrolling.component.html',
  styleUrls: ['./virtual-scrolling.component.scss']
})
export class VirtualScrollingComponent implements OnInit {
  persons: any[] = [];

  @Output() showEvent: EventEmitter<any> = new EventEmitter();
  @Output() removeEvent: EventEmitter<any> = new EventEmitter();
  constructor(private readonly userService: UserService) { }

  ngOnInit(): void {
    this.persons = this.userService.getUsers();
  }

  show(person: any): void {
    this.showEvent.emit(person);
  }

  remove(person: any): void {
    this.removeEvent.emit(person);
  }
  
}
