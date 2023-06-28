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
  foodItem: any
  constructor(private auth: AuthService, private route: ActivatedRoute, private orderService: OrderService, private foodMenuService: FoodMenuService) { }

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

    let user = '';


    this.orderService.saveOrder({ foodItemId: this.foodItem.id }).subscribe(res => {
      console.log(res);
      // this.router.navigate(['order/1'])
      M.toast({ html: `Thanks! We have received your order for ${this.foodItem.name}` })
    }, (err) => {
      console.log(err);
      
      M.toast({ html : err.error});

    })

  }



}
