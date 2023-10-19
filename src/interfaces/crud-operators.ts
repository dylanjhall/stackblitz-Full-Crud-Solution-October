import { HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

export interface CrudOperators<
  TModel,
  KeyName extends keyof TModel,
  TResponse = TModel,
  KType = TModel[KeyName]
> {
  create(
    resourceUrl: string,
    t: TModel,
    options?: {}
  ): Observable<TResponse> | Observable<HttpResponse<TResponse>> | (() => Observable<TResponse>) ;
  read(
    resourceUrl: string,
    options?: {}
  ): Observable<TResponse[]> | Observable<HttpResponse<TResponse[]>> | (() => Observable<TResponse>);
  list(
    resourceUrl: string,
    options?: {}
  ): Observable<TResponse[]> | Observable<HttpResponse<TResponse[]>> | (() => Observable<TResponse>);
  update(
    resourceUrl: string,
    t: Partial<TModel>,
    options?: {}
  ): Observable<TResponse> | Observable<HttpResponse<TResponse>> | (() => Observable<TResponse>);
  delete(
    resourceUrl: string,
    options?: {}
  ): Observable<TResponse> | Observable<HttpResponse<TResponse>> | (() => Observable<TResponse>);
  getById(
    resourceUrl: string,
    options?: {}
  ): Observable<TResponse[]> | Observable<HttpResponse<TResponse[]>> | (() => Observable<TResponse>);
}
