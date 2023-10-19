import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GenericHttp } from '../classes/generic-http';
import { CrudBase } from '../classes/crud-base';
import { User } from '../interfaces/user';
//import { CrudService } from '../services/crud.service';

const uBASE_URL = 'https://jsonplaceholder.typicode.com/users';

@Injectable({
  providedIn: 'root',
})

export class UserService extends GenericHttp<User, 'id'> {
  constructor() {
    super(); 
  }

  // getUsersWithRole(role: string) {
  //   return this.list(`role/${role}`);
  // }
}
