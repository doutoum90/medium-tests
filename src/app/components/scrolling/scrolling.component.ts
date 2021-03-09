import { TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as faker from 'faker';

@Component({
  selector: 'app-scrolling',
  templateUrl: './scrolling.component.html',
  styleUrls: ['./scrolling.component.scss']
})
export class ScrollingComponent implements OnInit {

  constructor(private readonly router : Router) { }

  ngOnInit(): void {
  }

 
  show(person: any): void {
    this.router.navigate(['show'])
    console.log(person);
  }

  remove(person: any): void {
    console.log(person);
  }
}
