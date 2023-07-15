import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FoodItem } from '../models/FoodItem.model';
import { EventEmitter, Output } from '@angular/core';
import { environment } from 'src/environments/environment';
import { DatePipe } from '@angular/common';
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

  getFoodItemsAccordingToTypeandDay(type: string, date: Date) {
    // https://r8mm4pjf3g.execute-api.us-east-1.amazonaws.com/dev/
    let datePipe = new DatePipe('en-US');
    const formattedDate = datePipe.transform(new Date(date), 'yyyy-MM-dd');
    return this.http.get<FoodItem[]>(environment.domain + "/fooditem?" + "date=" +formattedDate)
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
