import { User } from '../interfaces/user';
import { Component, OnInit, inject } from '@angular/core';
import { UserService } from './user.service';
import { NgFor } from '@angular/common';
import { UserCachableService } from './user-cachable.service';
import { FullResponseUserService } from './full-response-user.service';
import { map } from 'rxjs';

const url = 'https://jsonplaceholder.typicode.com/users';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [NgFor],
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  users: User[] = [];
  usersCachable: User[] = [];
  userFullResponse?: User[] | null = [];

  #service = inject(UserService);
  #cachable = inject(UserCachableService);
  #fullResponse = inject(FullResponseUserService);
 
  constructor() {}

  ngOnInit() {}

  getUsers(e: Event) {
    e.preventDefault();
    this.#service.list(url).subscribe((v) => this.users = v);
    this.#cachable.list(url).subscribe((v) => this.usersCachable = v);
    this.#fullResponse.getAllUsers(url).subscribe((v) => this.userFullResponse = v);
  }

  
}
