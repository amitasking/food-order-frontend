import { HttpClient } from '@angular/common/http';
import { Injectable,Output, EventEmitter } from '@angular/core';
import { Order } from '../models/order.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  @Output() openOrderDetail : EventEmitter<any> = new EventEmitter<any>();
  
  url = "http://food-order-1703007131.us-east-1.elb.amazonaws.com"
  // url = "http://localhost:4000"
  constructor(private http : HttpClient) { }
  // https://r8mm4pjf3g.execute-api.us-east-1.amazonaws.com/dev
  saveOrder(order : Order){
    return this.http.post(this.url + '/order',order);
  }

  getMyOrders(username : any){
    return this.http.get(this.url + `/order?username=${username}`);
  }
}
