import { HttpClient } from '@angular/common/http';
import { Observable, of, tap } from 'rxjs';
import { StorageService } from '../services/storage.service';
import { CrudBase } from './crud-base';

export abstract class GenericHttpCachable<
  TModel,
  KeyName extends keyof TModel,
  TResponse = TModel,
  KType = TModel[KeyName]
> extends CrudBase<TModel, KeyName, TResponse, KType> {
  constructor(
    protected http: HttpClient,
    private storageService: StorageService
  ) {
    super();
  }
  private static readonly DEFAULT_EXPIRY = 5 * 60 * 1000;
  protected generateCacheKey(url: string): string {
    return `CACHE_${url}`;
  }

  create(
    resourceUrl: string,
    t: TModel,
    options?: {},
    expiry: number = GenericHttpCachable.DEFAULT_EXPIRY
  ): Observable<TResponse> {
    const url = `${resourceUrl}`;
    return this.http.post<TResponse>(url, t, options).pipe(
      tap((response) => {
        this.storageService.set(this.generateCacheKey(url), response, expiry);
      })
    );
  }

  read(
    resourceUrl: string,
    options?: {},
    expiry: number = GenericHttpCachable.DEFAULT_EXPIRY
  ): Observable<TResponse[]> {
    const url = `${resourceUrl}`;
    const cachedData = this.storageService.get(this.generateCacheKey(url));
    if (cachedData) {
      return of(cachedData);
    }
    return this.http.get<TResponse[]>(url, options).pipe(
      tap((response) => {
        this.storageService.set(this.generateCacheKey(url), response, expiry);
      })
    );
  }

  list(
    resourceUrl: string,
    options?: {},
    expiry: number = GenericHttpCachable.DEFAULT_EXPIRY
  ): Observable<TResponse[]> {
    return this.read(resourceUrl, options, expiry);
  }

  update(
    resourceUrl: string,
    t: Partial<TModel>,
    options?: {},
    expiry: number = GenericHttpCachable.DEFAULT_EXPIRY
  ): Observable<TResponse> {
    const url = `${resourceUrl}`;
    return this.http.put<TResponse>(url, t, options).pipe(
      tap((response) => {
        this.storageService.set(this.generateCacheKey(url), response, expiry);
      })
    );
  }

  delete(resourceUrl: string, options?: {}): Observable<TResponse> {
    const url = `${resourceUrl}`;
    return this.http.delete<TResponse>(url, options).pipe(
      tap(() => {
        this.storageService.set(this.generateCacheKey(url), null);
      })
    );
  }

  getById(
    resourceUrl: string,
    options?: {},
    expiry: number = GenericHttpCachable.DEFAULT_EXPIRY
  ): Observable<TResponse[]> {
    return this.read(resourceUrl, options, expiry);
  }
}
