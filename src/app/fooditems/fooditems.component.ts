import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FoodMenuService } from '../services/food-menu.service';
import { FoodItem } from '../models/FoodItem.model';

@Component({
  selector: 'app-fooditems',
  templateUrl: './fooditems.component.html',
  styleUrls: ['./fooditems.component.css']
})
export class FooditemsComponent implements OnInit {
  foodItems : FoodItem[] = [];
  tomarrow : any
  formattedDatee : string = ''
  @ViewChild('cal') cal! : ElementRef;
  constructor(private route : ActivatedRoute, private foodmenuService : FoodMenuService) { }

  ngOnInit(): void {
    this.tomarrow = new Date();
    this.tomarrow.setDate(this.tomarrow.getDate() + 1).toString()
    const currentDate = new Date();

const day = String(currentDate.getDate()).padStart(2, '0');
const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Months are zero-based
const year = String(currentDate.getFullYear());

const formattedDate = `${day}-${month}-${year}`;
this.formattedDatee = formattedDate
console.log(formattedDate);
this.tomarrow = formattedDate
    alert(this.tomarrow)
    this.route.queryParams.subscribe((params: Params) => {
      this.foodmenuService.getFoodItemsAccordingToType(params['type']).subscribe(res => {
        console.log(res);
        this.foodItems = res
       })
  
    });
  }

openCal(){
  this.cal.nativeElement.click()
}
}
