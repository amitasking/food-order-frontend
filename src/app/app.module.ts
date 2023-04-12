import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NotifierModule } from 'angular-notifier';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrderComponentComponent } from './order-component/order-component.component';
import { AdminComponent } from './admin/admin.component';
import { UploadMenuComponent } from './upload-menu/upload-menu.component';
import { RatingComponent } from './rating/rating.component';
import { FeedbackComponent } from './feedback/feedback.component';

@NgModule({
  declarations: [
    AppComponent,
    OrderComponentComponent,
    AdminComponent,
    UploadMenuComponent,
    RatingComponent,
    FeedbackComponent
  ],
  imports: [
    NotifierModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
