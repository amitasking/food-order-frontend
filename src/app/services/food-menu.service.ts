import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FoodItem } from '../models/FoodItem.model';
import { EventEmitter,Output} from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class FoodMenuService {
    url = "http://50.16.158.237:3000"
  
  @Output() daySelectedEvent : EventEmitter<any> = new EventEmitter<any>();
  constructor(private http : HttpClient) { 
  //s this.url = "http://localhost:3000"
  }

  getFoodItemsAccordingToType(type : any){
    // https://r8mm4pjf3g.execute-api.us-east-1.amazonaws.com/dev/
    return this.http.get<FoodItem[]>(this.url+"/fooditem?type="+type)
  }

  getFoodItemsAccordingToTypeandDay(type : string,day:Number){
    // https://r8mm4pjf3g.execute-api.us-east-1.amazonaws.com/dev/
    return this.http.get<FoodItem[]>(this.url+"/fooditem?type="+type+"&day="+day)
  }

  getAllFoodItems(){
    return this.http.get<FoodItem[]>(this.url+"/fooditem?all=true");
  }


}
