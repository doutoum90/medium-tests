import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/models';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {

  quote: string | undefined;
  isLoading = false;

  dtOptions: DataTables.Settings = {};
  persons: Person[] = [];

  constructor(private apiEndpointsService: UserService) {}

  ngOnInit() {

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      serverSide: true,
      processing: true,
      ajax: (dataTablesParameters: any, callback) => {
        this.apiEndpointsService.getUsersWithParams(dataTablesParameters, 10)
          .subscribe((resp: Person[]) => {
            this.persons = resp;
            callback({
              recordsTotal: 10,
              recordsFiltered: 1000,
              data: [],
            });
          });
      },
      columns: [{ data: 'id' }, { data: 'firstName' }, { data: 'lastName' }],
    };
  }


}
