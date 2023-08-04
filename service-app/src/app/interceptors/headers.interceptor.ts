import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HeadersInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // request.headers.set('api-key', 'test api key');

    // const startTime = (new Date()).getTime();
    const startTime = new Date();

    const customRequest = request.clone({
      setHeaders: { 'api-key': 'test api key' }
    });
    const result = next.handle(customRequest);

    // const endTime = (new Date()).getTime();
    const endTime = new Date();
    // const time = endTime - startTime;
    console.log(`time taken by api to call : ${startTime} to ${endTime}`);

    return result;
  }
}
