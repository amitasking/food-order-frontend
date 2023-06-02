import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { OrderComponentComponent } from './order-component/order-component.component';
import { UploadMenuComponent } from './upload-menu/upload-menu.component';
import { MyordersComponent } from './myorders/myorders.component';
import { OrderplacedComponent } from './orderplaced/orderplaced.component';
import { FoodTypeComponent } from './food-type/food-type.component';
import { ArdsComponent } from './ards/ards.component';
import { FooditemsComponent } from './fooditems/fooditems.component';
// import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  // {
  //   component : OrderComponentComponent,path : ''
  // },
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
  },
  {
     component : OrderplacedComponent,path : 'order/:id'
  },
  {
    component : FoodTypeComponent, path : ''
  },
  {
    component : FooditemsComponent , path : 'fooditems'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
   
}
