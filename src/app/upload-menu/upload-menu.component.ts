import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-upload-menu',
  templateUrl: './upload-menu.component.html',
  styleUrls: ['./upload-menu.component.css']
})
export class UploadMenuComponent implements OnInit {
  //@ViewChild('sidenav') sidenav: MatSidenav;
  constructor() { }
 
  ngOnInit(): void {
  }

}
