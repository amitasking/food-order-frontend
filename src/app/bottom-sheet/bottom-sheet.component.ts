import { Component, OnInit ,EventEmitter,Output} from '@angular/core';
import { FoodMenuService } from '../services/food-menu.service';

@Component({
  selector: 'app-bottom-sheet',
  templateUrl: './bottom-sheet.component.html',
  styleUrls: ['./bottom-sheet.component.css']
})
export class BottomSheetComponent implements OnInit {
 
  constructor(private foodMenuService : FoodMenuService) { }

  ngOnInit(): void {
  }

  daySelected(day : any){
    this.foodMenuService.daySelectedEvent.emit(day);
  }


}
