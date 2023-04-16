import { Component, OnInit } from '@angular/core';
// import M from 'materialize-css';
@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {
  opened: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
