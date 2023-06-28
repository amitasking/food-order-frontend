import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FoodItem } from '../models/FoodItem.model';
import { EventEmitter, Output } from '@angular/core';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class FoodMenuService {
 
  @Output() daySelectedEvent: EventEmitter<any> = new EventEmitter<any>();
  constructor(private http: HttpClient) {
    
  }

  getFoodItemsAccordingToType(type: any) {
    return this.http.get<FoodItem[]>(environment.domain + "/fooditem?type=" + type)
  }

  getFoodItemsAccordingToTypeandDay(type: string, day: Number) {
    // https://r8mm4pjf3g.execute-api.us-east-1.amazonaws.com/dev/
    return this.http.get<FoodItem[]>(environment.domain + "/fooditem?type=" + type + "&day=" + day)
  }

  getFoodItemByid(id: any) {
    return this.http.get<FoodItem[]>(environment.domain + `/fooditem?id=${id}`);
  }


  getAllFoodItems() {
    return this.http.get<FoodItem[]>(environment.domain + "/fooditem?all=true");
  }

  addfooditem(foodItem: FoodItem) {

  }

}
