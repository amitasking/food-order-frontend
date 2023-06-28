import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';

import { Auth } from 'aws-amplify';

import { catchError, switchMap } from 'rxjs/operators';
import { from, Observable } from 'rxjs';
import { AuthService } from './services/auth.service';

/** Pass untouched request through to the next request handler. */
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return from(Auth.currentSession())
    .pipe(
        switchMap((auth: any) => { // switchMap() is used instead of map().
  
            let jwt = auth.accessToken.jwtToken;
            let with_auth_request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${jwt}`
                }
            });
            console.log("Cloned",with_auth_request);
            return next.handle(with_auth_request);
        }),
        // catchError((err) => {
        //     console.log("Error ", err);
        //     return next.handle(request);
        // })
    );
  }

 
}