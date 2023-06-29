import { HttpClient } from '@angular/common/http';
import { Injectable,Output, EventEmitter } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Order } from '../models/order.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  @Output() openOrderDetail : EventEmitter<any> = new EventEmitter<any>();
  constructor(private http : HttpClient) { }
  saveOrder(order : Order){
    return this.http.post(environment.domain + '/order',order);
  }

  getMyOrders(){
    return this.http.get(environment.domain + `/order`);
  }
}
