import { Injectable } from '@angular/core';
import * as faker from 'faker';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getUsers(numbers = 100) {
    return Array(numbers).fill(0).map(()  =>  { 
      return {
          name: faker.name.findName(),
          bio: faker.hacker.phrase(),
          avatar: faker.image.business(),
          database: faker.database.type
        }
      })
  }

  getUsersWithParams(params:any, numbers = 10) {
    return of(Array(numbers).fill(0).map(()  =>  { 
		return {
			id: faker.name.lastName(),
			firstName: faker.name.findName(),
			lastName: faker.name.findName(),
		}
      }));
  }
}
