import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  url = 'http://food-order-1703007131.us-east-1.elb.amazonaws.com'
 // url = 'http://localhost:4000'
  constructor(private http: HttpClient) {

  }

  addPushSubscriber(sub: any) {
    console.log(JSON.stringify(sub));

    return this.http.post(`${this.url}/notification/register`, sub);
  }

  send() {
    return this.http.post(`${this.url}/notification/send`,{})
  }

}
