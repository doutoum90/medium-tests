import { Directive, OnInit } from '@angular/core';
import { ControlContainer } from '@angular/forms';

@Directive({
  selector: '[bindQueryParams]'
})
export class BindQueryParamDirective implements OnInit {

  constructor(private ngControl: ControlContainer) {}

  ngOnInit() {
    if (location.search) {
      const queryParams = new URLSearchParams(location.search);
      const value = Object.fromEntries(queryParams.entries());
      this.ngControl.control?.patchValue(value);
    }
  }

}
