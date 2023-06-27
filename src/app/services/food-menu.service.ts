import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FoodItem } from '../models/FoodItem.model';
import { EventEmitter,Output} from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class FoodMenuService {
    url = "http://food-order-1703007131.us-east-1.elb.amazonaws.com"
  
  @Output() daySelectedEvent : EventEmitter<any> = new EventEmitter<any>();
  constructor(private http : HttpClient) { 
  // this.url = "http://localhost:4000"
  }

  getFoodItemsAccordingToType(type : any){
    // https://r8mm4pjf3g.execute-api.us-east-1.amazonaws.com/dev/
    return this.http.get<FoodItem[]>(this.url+"/fooditem?type="+type)
  }

  getFoodItemsAccordingToTypeandDay(type : string,day:Number){
    // https://r8mm4pjf3g.execute-api.us-east-1.amazonaws.com/dev/
    return this.http.get<FoodItem[]>(this.url+"/fooditem?type="+type+"&day="+day)
  }

  getFoodItemByid(id:any){
    return this.http.get<FoodItem[]>(this.url+`/fooditem?id=${id}`);
  }


  getAllFoodItems(){
    return this.http.get<FoodItem[]>(this.url+"/fooditem?all=true");
  }
  
  addfooditem(foodItem : FoodItem){

  }

}
