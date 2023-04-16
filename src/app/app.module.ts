import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NotifierModule } from 'angular-notifier';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrderComponentComponent } from './order-component/order-component.component';
import { AdminComponent } from './admin/admin.component';
import { UploadMenuComponent } from './upload-menu/upload-menu.component';
import { RatingComponent } from './rating/rating.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SideNavComponent } from './side-nav/side-nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {WebcamModule} from 'ngx-webcam';
import { CamComponent } from './cam/cam.component';
import { MyordersComponent } from './myorders/myorders.component';
@NgModule({
  declarations: [
    AppComponent,
    OrderComponentComponent,
    AdminComponent,
    UploadMenuComponent,
    RatingComponent,
    FeedbackComponent,
    SideNavComponent,
    CamComponent,
    MyordersComponent,
   // QrCodeGenratorComponent
  ],
  imports: [
    WebcamModule,
    MatToolbarModule,
    MatSidenavModule,
    // QRCodeModule,
    NotifierModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
