import { Injectable } from '@angular/core';
import * as faker from 'faker';

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
}
