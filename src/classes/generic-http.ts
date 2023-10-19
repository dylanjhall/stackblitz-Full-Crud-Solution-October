import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';
import { CrudBase } from './crud-base';

export abstract class GenericHttp<
  TModel,
  KeyName extends keyof TModel,
  TResponse = TModel,
  KType = TModel[KeyName]
> extends CrudBase<TModel, KeyName, TResponse, KType> {

  protected http = inject(HttpClient);
  constructor() {
    super();
  }

  create(resourceUrl: string, t: TModel, options?: {}): Observable<TResponse> {
    return this.http
      .post<TResponse>(`${resourceUrl}`, t, options)
      .pipe(shareReplay(1));
  }

  read(resourceUrl: string, options?: {}): Observable<TResponse[]> {
    return this.http
      .get<TResponse[]>(`${resourceUrl}`, options)
      .pipe(shareReplay(1));
  }

  list(resourceUrl: string, options?: {}): Observable<TResponse[]> {
    return this.http
      .get<TResponse[]>(`${resourceUrl}`, options)
      .pipe(shareReplay(1));
  }

  update(
    resourceUrl: string,
    t: Partial<TModel>,
    options?: {}
  ): Observable<TResponse> {
    return this.http
      .put<TResponse>(`${resourceUrl}`, t, options)
      .pipe(shareReplay(1));
  }

  delete(resourceUrl: string, options?: {}): Observable<TResponse> {
    return this.http
      .delete<TResponse>(`${resourceUrl}`, options)
      .pipe(shareReplay(1));
  }

  getById(resourceUrl: string, options?: {}): Observable<TResponse[]> {
    return this.http
      .get<TResponse[]>(`${resourceUrl}`, options)
      .pipe(shareReplay(1));
  }
}
