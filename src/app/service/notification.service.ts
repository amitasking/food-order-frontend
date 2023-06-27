import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {


  constructor(private http: HttpClient) {

  }

  addPushSubscriber(sub:any,key:any,auth:any) {
    console.log(JSON.stringify(sub));
    
      return this.http.post(`http://localhost:4000/api/notifications`, sub);
  }

  send() {
      return this.http.post('/api/newsletter', null);
  }

}
