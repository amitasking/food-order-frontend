import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { ActivatedRoute, NavigationEnd, ParamMap, Router } from '@angular/router';
import { FoodMenuService } from '../services/food-menu.service';
import { MatDatepicker } from '@angular/material/datepicker';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-food-type',
  templateUrl: './food-type.component.html',
  styleUrls: ['./food-type.component.css']
})
export class FoodTypeComponent implements OnInit {
  @ViewChild('picker') datePicker!: MatDatepicker<Date>;
  dateControl: FormControl = new FormControl();
  fragment: any = null
  foodItems: [] = []
  type: any = ""
  day : any = ""
  constructor(private router: Router, private route: ActivatedRoute, private foodMenuService: FoodMenuService) { }
  defaultDate: Date = new Date();
  dayMap = new Map(
    [
      [0, "Sunday"],
      [1, "Monday"],
      [2, "Tuesday"],
      [3, "Wednesday"],
      [4, "Thursday"],
      [5,"Friday"],
      [6,"Saturday"]
    ]

  )
  ngOnInit(): void {
    // alert(this.defaultDate)
    this.route.queryParamMap.subscribe((params: ParamMap) => {
      // Access query parameters here
      this.dateControl.reset()
      
      const queryParam1 = params.get('type');
      this.type = queryParam1
      if (!queryParam1) {
        this.type = 'lunch'
        this.router.navigate([''], { queryParams: { type: 'lunch' } });
      }
      // Perform actions based on query parameter values
      // alert('Query Parameter 1:' + queryParam1);
      // alert('Query Parameter 2:' + queryParam2);
      this.foodMenuService.getFoodItemsAccordingToTypeandDay(this.type, this.defaultDate.getDay()).subscribe((res: any) => {
        console.log(res);
        this.foodItems = res
      })
    });
  };


  typeSelected(foodType: string) {
    this.router.navigate([''], { queryParams: { type: foodType } });
  }
  onDateSelected(event: any) {
    const selectedDate: Date = event.value; // Get the selected date value
    this.day = selectedDate.getDay()
   // console.log( + " " + selectedDate.getMonth());
    // Perform any desired actions with the selected date
    this.foodMenuService.getFoodItemsAccordingToTypeandDay(this.type, selectedDate.getDay()).subscribe((res: any) => {
      console.log(res);
      this.foodItems = res
    })
  }


  getDay(){
    return this.dayMap.get(this.day);
  }


  openDatePicker() {
    this.datePicker.open();
  }
}
