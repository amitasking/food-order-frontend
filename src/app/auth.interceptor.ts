import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';

import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service';

/** Pass untouched request through to the next request handler. */
@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private auth : AuthService){}

  intercept(req: HttpRequest<any>, next: HttpHandler):
     Observable<HttpEvent<any>> {
    //    // Get the auth token from the service.
        
    //    let token = localStorage.getItem("token") as string
    //    let parsedToken = (JSON.parse(token) as any)
    //    let jwt = "";
    // //    if(token) {
    // //       parsedToken.jwtToken
    // //    }

    //  //  alert(parsedToken.jwtToken);
    //    // Clone the request and replace the original headers with
    //    // cloned headers, updated with the authorization.
    //    const authReq = req.clone({
    //      headers: req.headers.set('Authorization',"Bearer " + parsedToken.jwtToken as string)
    //    });
   
       // send cloned request with header to the next handler.
       //return next.handle(authReq);
       return next.handle(req);
  }
}