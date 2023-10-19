import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, tap, throwError } from 'rxjs';
import { GenericHttpFullResponse } from '../classes/generic-http-full-response';
import { User } from '../interfaces/user';

//const uBASE_URL = 'https://jsonplaceholder.typicode.com/users';

@Injectable({
  providedIn: 'root',
})
export class FullResponseUserService extends GenericHttpFullResponse<
  User,
  'id'
> {
  constructor(http: HttpClient) {
    super(http);
  }

  getAllUsers(resource : string) {
    //console.log(resource)
    return this.list(resource, {
      observe: 'response',
    }).pipe(
      tap((r) => console.log(r)),
      map((r) => this.handleResponse(r)),
      catchError(this.handleError)
    );
  }

  private handleResponse(serverResponse: HttpResponse<User[]>): User[] | null{
    console.log(serverResponse.body);
    return serverResponse.body;
  }

  private handleError(error: any) {
    return throwError(
      () => new Error(`Error: ${error.status}. ${error.statusText}`)
    );
  }
}
