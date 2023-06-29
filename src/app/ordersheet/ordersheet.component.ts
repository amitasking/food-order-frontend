import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { MatSelect } from '@angular/material/select';
import { NotifierService } from 'angular-notifier';
declare var M: any;
@Component({
  selector: 'app-ordersheet',
  templateUrl: './ordersheet.component.html',
  styleUrls: ['./ordersheet.component.css']
})
export class OrdersheetComponent implements OnInit {
  selectedOrg: string = ''
  selectedMenuType: string = ''
  constructor(private http: HttpClient, private notifier: NotifierService) { }
  organizations: any = []

  ngOnInit(): void {
    const modalElement = document.getElementById('myModal');
    M.Modal.init(modalElement);

    this.getOrganization()
  }

  getOrganization() {
    this.http.get(environment.domain + '/organization').subscribe(res => {
      this.organizations = res
    })
  }

  getOrderSheet() {
    if (this.selectedOrg && this.selectedMenuType) {
      this.http.get(environment.domain + `/admin/allorders?type=${this.selectedMenuType}&org=${this.selectedOrg}`).subscribe(res => {

      }, err => {
        M.toast({ html: err.error });
      }, () => {
        M.toast({ html: `Your order sheet has been mailed to you!` })
      })
    }
  }


}
