import { Component, OnInit } from '@angular/core';
import { FoodMenuService } from './services/food-menu.service';
import { FoodItem } from './models/FoodItem.model';

declare var M: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent  implements OnInit  {
  
  foodType : String = ''
  constructor(private foodmenuService : FoodMenuService){

  }
  ngOnInit(): void {
  
    const modalElement = document.getElementById('myModal');
    M.Modal.init(modalElement);
  }
  foodTypeSelected : boolean = false;
  foodItems : FoodItem[] = [];

  title = 'food-order';
}
