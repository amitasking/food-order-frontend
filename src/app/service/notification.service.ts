import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  
 // url = 'http://localhost:4000'
  constructor(private http: HttpClient) {

  }

  addPushSubscriber(sub: any) {
    console.log(JSON.stringify(sub));

    return this.http.post(`${environment.domain}/notification/`, sub);
  }

  send() {
    return this.http.post(`${environment.domain}/notification/send`,{})
  }

}
