import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSelect } from '@angular/material/select';
import { NotifierService } from 'angular-notifier';
import { environment } from 'src/environments/environment';
declare var M: any;
@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  notification_text: string = ''
  constructor(private http: HttpClient, private notifier: NotifierService) { }

  ngOnInit(): void {
    const modalElement = document.getElementById('myModal');
    M.Modal.init(modalElement);
  }

  send() {
    if(!this.notification_text)
      return
    this.http.post(environment.domain + '/notification/send',{
      "notification" : this.notification_text
    }).subscribe(res => {
      M.toast({ html: `Notifications has been sent to users!` })
    },err => {
      M.toast({ html: err.error });
    },() => {
     
    })
   }
}
