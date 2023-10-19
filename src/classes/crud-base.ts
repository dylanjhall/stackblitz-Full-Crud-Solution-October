import { HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { CrudOperators } from '../interfaces/crud-operators';

export abstract class CrudBase<
  TModel,
  KeyName extends keyof TModel,
  TResponse = TModel,
  KType = TModel[KeyName]
> implements CrudOperators<TModel, KeyName, TResponse, KType> {

  abstract create(resourceUrl: string, t: TModel, options?: {}): Observable<TResponse> | Observable<HttpResponse<TResponse>> | (() => Observable<TResponse>) ;
  
  abstract read(resourceUrl: string, options?: {}): Observable<TResponse[]> | Observable<HttpResponse<TResponse[]>> | (() => Observable<TResponse>);

  abstract list(resourceUrl: string, options?: {}): Observable<TResponse[]> | Observable<HttpResponse<TResponse[]>> | (() => Observable<TResponse>);

  abstract update(resourceUrl: string, t: Partial<TModel>, options?: {}): Observable<TResponse> | Observable<HttpResponse<TResponse>> | (() => Observable<TResponse>);

  abstract delete(resourceUrl: string, options?: {}): Observable<TResponse> | Observable<HttpResponse<TResponse>> | (() => Observable<TResponse>);

  abstract getById(resourceUrl: string, options?: {}): Observable<TResponse[]> | Observable<HttpResponse<TResponse[]>> | (() => Observable<TResponse>);
}
