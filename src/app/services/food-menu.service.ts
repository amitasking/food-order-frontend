import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FoodItem } from '../models/FoodItem.model';
import { EventEmitter,Output} from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class FoodMenuService {
  @Output() daySelectedEvent : EventEmitter<any> = new EventEmitter<any>();
  constructor(private http : HttpClient) { }

  getFoodItemsAccordingToType(type : any){
    // https://r8mm4pjf3g.execute-api.us-east-1.amazonaws.com/dev/
    return this.http.get<FoodItem[]>("http://107.21.181.246:3000/fooditem?type="+type)
  }

  getFoodItemsAccordingToTypeandDay(type : string,day:Number){
    // https://r8mm4pjf3g.execute-api.us-east-1.amazonaws.com/dev/
    return this.http.get<FoodItem[]>("http://107.21.181.246:3000/fooditem?type="+type+"&day="+day)
  }

  getAllFoodItems(){
    return this.http.get<FoodItem[]>("http://107.21.181.246:3000/fooditem");
  }


}
