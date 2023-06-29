import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-ordersheet',
  templateUrl: './ordersheet.component.html',
  styleUrls: ['./ordersheet.component.css']
})
export class OrdersheetComponent implements OnInit {

  constructor(private http : HttpClient) { }
  organizations : any = []

  ngOnInit(): void {
     this.getOrganization()  
  }

  getOrganization(){
    this.http.get(environment.domain + '/organization').subscribe(res => {
      this.organizations = res
    })
  }


}
