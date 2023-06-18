import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { ActivatedRoute, NavigationEnd, ParamMap, Router } from '@angular/router';
import { FoodMenuService } from '../services/food-menu.service';
import { MatDatepicker } from '@angular/material/datepicker';
import { FormControl } from '@angular/forms';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { BottomSheetComponent } from '../bottom-sheet/bottom-sheet.component';
import {MatDialog, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
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
  day : any = ""
  notFound = false;
  constructor(private _bottomSheet: MatBottomSheet, private router: Router, private route: ActivatedRoute, private foodMenuService: FoodMenuService) { 
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

timeover = false;
  displayErrorImage(res :any){
       //  console.log("Current time is before 10 AM.");
       this.notFound = false;
       this.timeover = false;
    if(!res || res.length == 0){
      this.notFound = true;
    }
    else 
    this.notFound = false

  }
  
  ngOnInit(): void {
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


  typeSelected(foodType: string) {
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
  daySelected (day : number,chip : HTMLElement) {
    this.day = day
    if(this.prevSelected == chip) 
      return;
    this.selectedDay = day
    chip.classList.add('selected')
    if(this.prevSelected)
       this.prevSelected.classList.remove('selected')
    this.prevSelected = chip
    console.log(this.prevSelected)
    this.foodMenuService.getFoodItemsAccordingToTypeandDay(this.type, day).subscribe((res: any) => {
      this.displayErrorImage(res)
      console.log(res);
      this.foodItems = res
    })
  }


}


