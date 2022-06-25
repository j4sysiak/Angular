import {Injectable} from '@angular/core';
import {HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // console.log('Request is on its way');
    // console.log(req.url);
    const  modifiedRequest = req.clone({
      // komentuję ze względu na problem z CORS
     //    headers: req.headers.append('Auth', 'xyz')
     //    headers: req.headers.append('sec-fetch-mode', 'no-cors')  - to działa
    });
    return next.handle(modifiedRequest);
  }
}
