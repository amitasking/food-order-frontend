import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { ActivatedRoute, NavigationEnd, ParamMap, Router } from '@angular/router';
import { FoodMenuService } from '../services/food-menu.service';
import { MatDatepicker } from '@angular/material/datepicker';
import { FormControl } from '@angular/forms';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { BottomSheetComponent } from '../bottom-sheet/bottom-sheet.component';
import {MatDialog, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import { OrderService } from '../services/order.service';
declare var M: any;

@Component({
  selector: 'app-food-type',
  templateUrl: './food-type.component.html',
  styleUrls: ['./food-type.component.css']
})
export class FoodTypeComponent implements OnInit {
  ngAfterViewInit() {
    // Initialize the modal
   
  }
  @ViewChild('picker') datePicker!: MatDatepicker<Date>;
  @ViewChild('dialog') dialog!: MatDialog;
  dateControl: FormControl = new FormControl();
  fragment: any = null
  foodItems: [] = []
  type: any = ""
  currentDate: any = new Date()
  day : any = ""
  dates : string[] = [];
  

  fillDates(){
    var currentDate = new Date();
    this.dates.push(this.dayMap.get(currentDate.getDay())?.slice(0,3) + " " + currentDate.getDate());

// Loop to print the next 7 days
for (var i = 0; i < 6; i++) {
  // Get the date string in the format "Day, Month Date, Year"
  var dateString = currentDate.toLocaleDateString("en-US", { weekday: 'short', month: 'long', day: 'numeric', year: 'numeric' });

  // Increment the current date by 1 day
  currentDate.setDate(currentDate.getDate() + 1);
  this.dates.push(this.dayMap.get(currentDate.getDay())?.slice(0,3) + " " + currentDate.getDate());

}
  }
  notFound = false;
  constructor(private orderService : OrderService, private _bottomSheet: MatBottomSheet, private router: Router, private route: ActivatedRoute, private foodMenuService: FoodMenuService) { 
    const modalElement = document.getElementById('myModal');
    M.Modal.init(modalElement);
  }
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

  monthMap = new Map(
    [
      [0, "Jan"],
      [1, "Feb"],
      [2, "Mar"],
      [3, "Apr"],
      [4, "May"],
      [5,"Jun"],
      [6,"Jul"],
      [7,"Aug"],
      [8,"Sep"],
      [9,"Oct"],
      [10,"Nov"],
      [11,"Dec"],

    ]

  )

timeover = false;
  displayErrorImage(res :any){
       //  console.log("Current time is before 10 AM.");
       this.notFound = false;
  
    if(!res || res.length == 0){
      this.notFound = true;
    }
    else 
    this.notFound = false

  }
  
  ngOnInit(): void {
    this.currentDate = this.dayMap.get(new Date().getDay()) + ', ' +  new Date().getDate() + " " +  this.monthMap.get(new Date().getMonth())
    this.fillDates()
    this.day = this.defaultDate.getDay();
    this.foodMenuService.daySelectedEvent.subscribe(res => {
      this.foodMenuService.getFoodItemsAccordingToTypeandDay(this.type, res).subscribe((res: any) => {
        this.displayErrorImage(res)
        console.log(res);
        this.day = res
        this.foodItems = res
      })
    })
    // alert(this.defaultDate)
    this.route.queryParamMap.subscribe((params: ParamMap) => {
      // Access query parameters here
      this.dateControl.reset()
      const modalElement = document.getElementById('myModal');
      M.Modal.init(modalElement);
      const queryParam1 = params.get('type');
      this.type = queryParam1
     // this.type = queryParam1
     // alert(this.type)
      if (!queryParam1) {
        this.type = 'lunch'
        
        this.router.navigate([''], { queryParams: { type: 'lunch' } });
      }
      // Perform actions based on query parameter values
      // alert('Query Parameter 1:' + queryParam1);
      // alert('Query Parameter 2:' + queryParam2);
      this.foodMenuService.getFoodItemsAccordingToTypeandDay(this.type, this.day).subscribe((res: any) => {
        this.displayErrorImage(res)
        console.log(res);
        this.foodItems = res
       
      })
    });
  };


  typeSelected(foodType: string, btn : HTMLElement) {
    // if(btn.classList.contains('type')){
    //   btn.classList.remove('type');
    //   btn.classList.remove('type_text')
    //   btn.classList.add('active_type')
    //   btn.classList.add('active_type_text')      
    // }
    // else {
    //   btn.classList.remove('active_type');
    //   btn.classList.remove('active_type_text')
    //   btn.classList.add('type')
    //   btn.classList.add('type_text')      
      
    // }



    this.router.navigate([''], { queryParams: { type: foodType } });
  }
  // onDateSelected(event: any) {
  //   const selectedDate: Date = event.value; // Get the selected date value
  //   this.day = selectedDate.getDay()
  //  // console.log( + " " + selectedDate.getMonth());
  //   // Perform any desired actions with the selected date
  //   this.foodMenuService.getFoodItemsAccordingToTypeandDay(this.type, selectedDate.getDay()).subscribe((res: any) => {
  //     console.log(res);
  //     this.foodItems = res
  //   })
  // }


  getDay(){
    return this.dayMap.get(this.day);
  }


  openDatePicker() {
    //this.datePicker.open();
    this._bottomSheet.open(BottomSheetComponent);
  }
  selectedDate : any
  onDateSelect($event : any){
    const selectedDate: Date =  $event.value
    console.log(this.selectedDate);
    this.foodMenuService.getFoodItemsAccordingToTypeandDay(this.type, selectedDate.getDay()).subscribe((res: any) => {
      this.displayErrorImage(res)
      console.log(res);
      this.foodItems = res
    })
    
  }

  prevSelected : any
  selectedDay : any
  daySelected (day : number) {
    this.day = day
    // if(this.prevSelected == chip) 
    //   return;
    this.selectedDay = day
    // chip.classList.add('selected')
    // if(this.prevSelected)
    //    this.prevSelected.classList.remove('selected')
    // this.prevSelected = chip
 //   console.log(this.prevSelected)
    this.foodMenuService.getFoodItemsAccordingToTypeandDay(this.type, day).subscribe((res: any) => {
      this.displayErrorImage(res)
      console.log(res);
      this.foodItems = res
    })
  }
  openOrderDetail(foodItem : any){
    this.orderService.openOrderDetail.emit(foodItem);
    this.router.navigate(['food-detail',foodItem.id]);

  }

}


