import { Injectable } from '@angular/core';
import { Auth } from 'aws-amplify';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {

  }

  public getLoggedInUser() {
    return Auth.currentUserInfo()
  }

  public currentSession() : any {
    return Auth.currentSession()
  }
}
