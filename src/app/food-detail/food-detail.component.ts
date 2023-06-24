import { Component, OnInit } from '@angular/core';
import { OrderService } from '../services/order.service';
import { FoodMenuService } from '../services/food-menu.service';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Order } from '../models/order.model';
declare var M: any;
@Component({
  selector: 'app-food-detail',
  templateUrl: './food-detail.component.html',
  styleUrls: ['./food-detail.component.css']
})
export class FoodDetailComponent implements OnInit {
  foodItem : any
  constructor(private auth : AuthService, private route : ActivatedRoute, private orderService : OrderService, private foodMenuService : FoodMenuService) { }
  
  ngOnInit(): void {
    const modalElement = document.getElementById('myModal');
    M.Modal.init(modalElement);

    this.route.queryParamMap.subscribe(rex => {
      const modalElement = document.getElementById('myModal');
      M.Modal.init(modalElement);

    })
    this.foodMenuService.getFoodItemByid(this.route.snapshot.paramMap.get('id')).subscribe(res => {
      this.foodItem = res;
    })
    this.orderService.openOrderDetail.subscribe(res => {
      this.foodItem = res;
    })
  }


  orderPlaced() {
    if(!this.cutOff()){
      M.toast({ html: `Sorry You cannot order food after cutoff time` })
      return;
    }
    let user = '';
     this.auth.getLoggedInUser().then(data => {
      user = data.username
      let order;
      order = new Order(user, this.foodItem.type, this.foodItem.id);
      this.orderService.saveOrder(order).subscribe(res => {
        console.log(res);
        // this.router.navigate(['order/1'])
        M.toast({ html: `Thanks! We have received your order for ${this.foodItem.name}` })
      })
    })
  }
  

  cutOff() {
    const currentDateTime = new Date();
    const currentHour = currentDateTime.getHours();
    const currentMinutes = currentDateTime.getMinutes();
    if (this.foodItem && this.foodItem.servedOn == new Date().getDay()) {
      if (this.foodItem.menuType == 'lunch' && (currentHour < 10 || (currentHour === 10 && currentMinutes === 0)))
        return true;
      if (this.foodItem.menuType == 'dinner' && (currentHour < 16 || (currentHour === 16 && currentMinutes === 0)))
        return true;
      return false;
    }
    return true;
  }


}
