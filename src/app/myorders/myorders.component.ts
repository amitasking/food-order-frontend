import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-myorders',
  templateUrl: './myorders.component.html',
  styleUrls: ['./myorders.component.css']
})
export class MyordersComponent implements OnInit {
  progress = true;
  dayMap = new Map(
    [
      [0, "Sunday"],
      [1, "Monday"],
      [2, "Tuesday"],
      [3, "Wednesday"],
      [4, "Thursday"],
      [5,"Friday"],
      [6,"Saturday"]
    ])

  myorders:any = [];
  constructor(private auth : AuthService, private order : OrderService) { }

  ngOnInit(): void {
    let username = ''
    this.auth.getLoggedInUser().then((res:any) => {
      username = res.username
      this.order.getMyOrders(username).subscribe(res => {
        console.log(res);
        this.myorders = res;
      },err => {
        this.progress = false;
      },() => {
        this.progress = false

      })
    })
  }



}
