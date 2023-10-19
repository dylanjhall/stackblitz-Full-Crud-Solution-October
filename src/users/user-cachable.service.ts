import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GenericHttpCachable } from '../classes/generic-http-cachable';
import { User } from '../interfaces/user';
import { StorageService } from '../services/storage.service';

const uBASE_URL = 'https://jsonplaceholder.typicode.com/users';

@Injectable({
  providedIn: 'root',
})
export class UserCachableService extends GenericHttpCachable<User, 'id'> {

  constructor(http: HttpClient,  storageService: StorageService) {
super(http,storageService);
}
//private storageService: StorageService
}