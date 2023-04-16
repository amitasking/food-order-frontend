import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-qr-code-genrator',
  templateUrl: './qr-code-genrator.component.html',
  styleUrls: ['./qr-code-genrator.component.css']
})
export class QrCodeGenratorComponent implements OnInit {

  // Need to specify the valid website address
  value = 'https://www.geeksforgeeks.com/';
  constructor() { }

  ngOnInit(): void {
  }

  

}
