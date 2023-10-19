// import { HttpClient } from '@angular/common/http';
// import { inject, Injectable } from '@angular/core';
// import { Observable, shareReplay } from 'rxjs';
// import { CrudBase } from '../classes/crud-base';

// @Injectable({
//   providedIn: 'root',
// })
// export class CrudService<T, R> extends CrudBase<T, R> {
//   #http: HttpClient = inject(HttpClient);
//   constructor() {
//     super();
//   }

//   override create(_resourceUrl: string, _t: T, options?: {}): Observable<R> {
//     return this.#http.post<R>(_resourceUrl, _t, options).pipe(shareReplay(1));
//   }
//   override read(_resourceUrl: string, options?: {}): Observable<R[]> {
//     return this.#http.get<R[]>(_resourceUrl, options).pipe(shareReplay(1));
//   }
//   override update(
//     _resourceUrl: string,
//     _t: Partial<T>,
//     options?: {}
//   ): Observable<R> {
//     throw new Error('Method not implemented.');
//   }
//   override delete(_resourceUrl: string, options?: {}): Observable<R> {
//     throw new Error('Method not implemented.');
//   }
//   override getById(_resourceUrl: string, options?: {}): Observable<R[]> {
//     throw new Error('Method not implemented.');
//   }
// }
