import { HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

export interface WrappedResponse<ResponseType> {
  success: boolean;
  message: string;
  data: ResponseType | Observable<HttpResponse<ResponseType>> | null;
}
