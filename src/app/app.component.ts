import { Component, OnInit } from '@angular/core';
import { FoodMenuService } from './services/food-menu.service';
import { FoodItem } from './models/FoodItem.model';
import M from 'materialize-css';

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
    var elems = document.querySelectorAll('.datepicker')
    M.Datepicker.init(elems, {
      format : 'mmm dd, yyyy'
    });
  }
  foodTypeSelected : boolean = false;
  foodItems : FoodItem[] = [];

  title = 'food-order';
}
