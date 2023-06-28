import { Component, OnInit, Input } from '@angular/core';
import { FoodItem } from '../models/FoodItem.model';
import { OrderService } from '../services/order.service';
import { Order } from '../models/order.model';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-ards',
  templateUrl: './ards.component.html',
  styleUrls: ['./ards.component.css']
})
export class ArdsComponent implements OnInit {
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

  @Input()
  foodItem: FoodItem = new FoodItem;
  date: Date = new Date();
  constructor(private auth : AuthService, private dialog: MatDialog, private orderService: OrderService, private router: Router, private route: ActivatedRoute) {

  }



  ngOnInit(): void {
  }

  // cutOff() {
  //   const currentDateTime = new Date();
  //   const currentHour = currentDateTime.getHours();
  //   const currentMinutes = currentDateTime.getMinutes();
  //   if (this.selectedFoodItem && this.selectedFoodItem.servedOn == new Date().getDay()) {
  //     if (this.selectedFoodItem.menuType == 'lunch' && (currentHour < 10 || (currentHour === 10 && currentMinutes === 0)))
  //       return true;
  //     if (this.selectedFoodItem.menuType == 'dinner' && (currentHour < 16 || (currentHour === 16 && currentMinutes === 0)))
  //       return true;
  //     return false;
  //   }

  //   return true;
  // }

  
    
  

    //,err => {}, () => {

    // })
  }

  // day: any = ""
  // selectedFoodItem: any
  // openModal(foodItem: any) {
  //   this.selectedFoodItem = foodItem
  //   this.day = this.dayMap.get(foodItem.servedOn)
  //   const modalElement = document.getElementById('myModal');
  //   M.Modal.init(modalElement);
  //   var instance = M.Modal.getInstance(modalElement);
  //   instance.open()
  // }

