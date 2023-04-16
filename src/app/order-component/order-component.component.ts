import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NotifierService } from 'angular-notifier';
@Component({
  selector: 'app-order-component',
  templateUrl: './order-component.component.html',
  styleUrls: ['./order-component.component.css']
})
export class OrderComponentComponent implements OnInit {
  img : any = ''
  options = { fullWidth: false };
  private readonly notifier: NotifierService;
  constructor(private http : HttpClient, notifierService: NotifierService) {
    this.notifier = notifierService;
  }

  ngOnInit(): void {
    // this.http.get('http://localhost:3000/order/getqr').subscribe(res => {
    //   console.log(res);
    //   this.img = 'data:image/jpg;base64,'+res
    // })
  }
  

  book(){
    this.notifier.notify('success', 'Your order Has Been Booked!');
  }


    
}
