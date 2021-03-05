import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html'
})
export class TodosComponent implements OnInit {
  form = new FormGroup({
    searchTerm: new FormControl(''),
    category: new FormControl('one'),
  });

  ngOnInit() {
    this.form.valueChanges.subscribe((value) => {
      console.log('fetch data with new value', value);
    });
  }
}