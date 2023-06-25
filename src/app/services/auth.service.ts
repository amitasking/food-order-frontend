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

  public currentSession() {
    Auth.currentSession().then(res => {
       let accessToken = res.getAccessToken()
     let jwt = accessToken.getJwtToken()

      //You can print them to see the full objects
       console.log(`myAccessToken: ${JSON.stringify(accessToken)}`)
      console.log("id " + res.getIdToken().getJwtToken())
      console.log(`myJwt: ${jwt}`)
    })
  }
}
