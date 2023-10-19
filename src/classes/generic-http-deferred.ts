import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { CrudBase } from "./crud-base";


//TODO: Doesn't work, have to create a new base :(

export abstract class GenericHttpDeferred<TModel, KeyName extends keyof TModel, TResponse = TModel, KType = TModel[KeyName]> 
  extends CrudBase<TModel, KeyName, TResponse, KType> {
  
  constructor(
    protected http: HttpClient,
    protected baseUrl: string
  ) {
    super();
  }

  create(resourceUrl: string, t: TModel, options?: {}): (() => Observable<TResponse> ){
    return () => this.http.post<TResponse>(`${this.baseUrl}/${resourceUrl}`, t, options);
  }

  read(resourceUrl: string, options?: {}): (() => Observable<TResponse[]>)  {
    return () => this.http.get<TResponse[]>(`${this.baseUrl}/${resourceUrl}`, options);
  }

  list(resourceUrl: string, options?: {}): (() => Observable<TResponse[]> ){
    return this.read(resourceUrl, options);
  }

  update(resourceUrl: string, t: Partial<TModel>, options?: {}): (() => Observable<TResponse> ){
    return () => this.http.put<TResponse>(`${this.baseUrl}/${resourceUrl}`, t, options);
  }

  delete(resourceUrl: string, options?: {}): (() => Observable<TResponse>) {
    return () => this.http.delete<TResponse>(`${this.baseUrl}/${resourceUrl}`, options);
  }

  getById(resourceUrl: string, options?: {}): (() => Observable<TResponse[]>) {
    return this.read(resourceUrl, options);
  }
}
