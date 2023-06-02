import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from '../models/order.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http : HttpClient) { }
  // https://r8mm4pjf3g.execute-api.us-east-1.amazonaws.com/dev
  saveOrder(order : Order){
    return this.http.post('http://107.21.181.246:3000/order',order);
  }
}
