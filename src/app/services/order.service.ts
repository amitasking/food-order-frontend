import { HttpClient } from '@angular/common/http';
import { Injectable,Output, EventEmitter } from '@angular/core';
import { Order } from '../models/order.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  @Output() openOrderDetail : EventEmitter<any> = new EventEmitter<any>();
  
  constructor(private http : HttpClient) { }
  // https://r8mm4pjf3g.execute-api.us-east-1.amazonaws.com/dev
  saveOrder(order : Order){
    let url = "http://50.16.158.237:3000"
   url = "http://localhost:4000"
    return this.http.post(url + '/order',order);
  }

  getMyOrders(username : any){
    let url = "http://50.16.158.237:3000"
  url = "http://localhost:4000"
    return this.http.get(url + `/order?username=${username}`);
  }
}
