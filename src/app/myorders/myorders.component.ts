import { Component, OnInit, } from '@angular/core';
import {HttpClient } from '@angular/common/http'
import { AuthService } from '../services/auth.service';
import { OrderService } from '../services/order.service';
import { environment } from 'src/environments/environment';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];
@Component({
  selector: 'app-myorders',
  templateUrl: './myorders.component.html',
  styleUrls: ['./myorders.component.css']
})
export class MyordersComponent implements OnInit {
  progress = true;
  tableData: any = ELEMENT_DATA;
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dayMap = new Map(
    [
      [0, "Sunday"],
      [1, "Monday"],
      [2, "Tuesday"],
      [3, "Wednesday"],
      [4, "Thursday"],
      [5, "Friday"],
      [6, "Saturday"]
    ])

  myorders: any = [];
  constructor(private auth: AuthService, private order: OrderService, private http : HttpClient) { }

  ngOnInit(): void {
    this.order.getMyOrders().subscribe(res => {
      console.log(res);
      this.myorders = res;
    }, err => {
      this.progress = false;
    }, () => {
      this.progress = false

    })
  }

  cancelOrder(order : any) { 
    console.log(order);
    
     this.http.put(environment.domain + '/order/cancel',{id:order.id}).subscribe(res => {

     },err=>{},()=>{
      order.status = 'CANCELLED'
     })
  }

}
