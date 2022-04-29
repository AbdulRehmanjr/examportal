import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest ,HTTP_INTERCEPTORS } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';


@Injectable({
  providedIn: 'root'
})

export class AuthintercepterService implements HttpInterceptor {


  constructor(private loginService: LoginService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // add token from local storage
    const token  = this.loginService.getToken();
    
    if(token != null){
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
    }
    return next.handle(req);
  }
}

export const httpInterceptorProviders= [
  { 
    provide: HTTP_INTERCEPTORS,
    useClass: AuthintercepterService, 
    multi: true 
  }
];