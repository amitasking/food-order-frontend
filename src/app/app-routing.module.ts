import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { OrderComponentComponent } from './order-component/order-component.component';
import { UploadMenuComponent } from './upload-menu/upload-menu.component';
import { MyordersComponent } from './myorders/myorders.component';

const routes: Routes = [
  {
    component : OrderComponentComponent,path : ''
  },
  {
    component : AdminComponent,path : 'orders'
  },
  {
    component : UploadMenuComponent,path : 'upload-menu'
  },
  {
    component : FeedbackComponent,path : 'feedback'
  },
  {
    component : MyordersComponent,path : 'myorders'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
   
}
