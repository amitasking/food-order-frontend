import { Component, OnInit,Input } from '@angular/core';
import { FoodItem } from '../models/FoodItem.model';
import { OrderService } from '../services/order.service';
import { Order } from '../models/order.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-ards',
  templateUrl: './ards.component.html',
  styleUrls: ['./ards.component.css']
})
export class ArdsComponent implements OnInit {
  @Input()
  foodItem: FoodItem = new FoodItem;
  
  constructor(private orderService : OrderService, private router : Router) { }

  ngOnInit(): void {
    
  }

  orderPlaced(fooditem : FoodItem){
    const userdata = localStorage.getItem('CognitoIdentityServiceProvider.j6g1josveiic95p1jd8f5hs2j.f117a7ce-a582-4606-8076-aff4be56eae8.userData')
    if(!userdata) return 
    const username = JSON.parse(userdata).Username
    console.log(username);
    let order;
    order = new Order(username,fooditem.type,fooditem.id);
    this.orderService.saveOrder(order).subscribe(res => {
      console.log(res);this.router.navigate(['order/1'])
      
     })
    //,err => {}, () => {
      
    // })
  }

}
