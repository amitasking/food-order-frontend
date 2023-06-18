import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  public getLoggedInUser() {
    const userdata = localStorage.getItem('CognitoIdentityServiceProvider.j6g1josveiic95p1jd8f5hs2j.f117a7ce-a582-4606-8076-aff4be56eae8.userData')
    console.log(userdata);
    
    if(!userdata) return 
    const username = JSON.parse(userdata).Username
    return (username);
  }
}
