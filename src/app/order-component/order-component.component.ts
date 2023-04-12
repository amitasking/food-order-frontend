import { Component, OnInit } from '@angular/core';
import { NotifierService } from 'angular-notifier';
@Component({
  selector: 'app-order-component',
  templateUrl: './order-component.component.html',
  styleUrls: ['./order-component.component.css']
})
export class OrderComponentComponent implements OnInit {
  options = { fullWidth: false };
  private readonly notifier: NotifierService;
  constructor(notifierService: NotifierService) {
    this.notifier = notifierService;
  }

  ngOnInit(): void {
  }
  

  book(){
    this.notifier.notify('success', 'Your order Has Been Booked!');
  }
}
