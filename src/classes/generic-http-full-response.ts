import { HttpClient, HttpResponse } from "@angular/common/http";
import { Observable } from "rxjs";
import { CrudBase } from "./crud-base";



export abstract class GenericHttpFullResponse<TModel, KeyName extends keyof TModel, TResponse = TModel, KType = TModel[KeyName]> 
  extends CrudBase<TModel, KeyName, TResponse, KType> {
  
  constructor(
    protected http: HttpClient
   
  ) {
    super();
  }

  create(resourceUrl: string, t: TModel, options?: {}): Observable<TResponse> | Observable<HttpResponse<TResponse>> {
    if (options && options.hasOwnProperty('observe') ) {
      return this.http.post<HttpResponse<TResponse>>(`${resourceUrl}`, t, options);
    }
    return this.http.post<TResponse>(`{resourceUrl}`, t, options);
  }

  read(resourceUrl: string, options?: {}): Observable<HttpResponse<TResponse[]>> {
    console.log(resourceUrl)
   /// if (options && options.hasOwnProperty('observe') ){
      return this.http.get<TResponse[]>(`${resourceUrl}`, {observe: 'response'});
   // }
   // return this.http.get<TResponse[]>(`${this.baseUrl}/${resourceUrl}`, options);
  }

  list(resourceUrl: string, options?: {}): Observable<HttpResponse<TResponse[]>> {
    return this.read(resourceUrl, options);
  }

  update(resourceUrl: string, t: Partial<TModel>, options?: {}): Observable<TResponse> | Observable<HttpResponse<TResponse>> {
    if (options && options.hasOwnProperty('observe')) {
      return this.http.put<HttpResponse<TResponse>>(`${resourceUrl}`, t, options);
    }
    return this.http.put<TResponse>(`${resourceUrl}`, t, options);
  }

  delete(resourceUrl: string, options?: {}): Observable<TResponse> | Observable<HttpResponse<TResponse>> {
    if (options && options.hasOwnProperty('observe')) {
      return this.http.delete<HttpResponse<TResponse>>(`${resourceUrl}`, options);
    }
    return this.http.delete<TResponse>(`${resourceUrl}`, options);
  }

  getById(resourceUrl: string, options?: {}): Observable<TResponse[]> | Observable<HttpResponse<TResponse[]>> {
    return this.read(resourceUrl, options);
  }
}
