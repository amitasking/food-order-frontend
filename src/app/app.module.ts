import { NgModule } from '@angular/core';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldModule} from '@angular/material/form-field';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NotifierModule } from 'angular-notifier';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrderComponentComponent } from './order-component/order-component.component';
import { AdminComponent } from './admin/admin.component';
import { UploadMenuComponent } from './upload-menu/upload-menu.component';
import { RatingComponent } from './rating/rating.component';
// import { FeedbackComponent } from './feedback/feedback.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SideNavComponent } from './side-nav/side-nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import {WebcamModule} from 'ngx-webcam';
// import { CamComponent } from './cam/cam.component';
import { MyordersComponent } from './myorders/myorders.component';
// import { SignUpComponent } from './sign-up/sign-up.component';
// import { SignInComponent } from './sign-in/sign-in.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { ArdsComponent } from './ards/ards.component';
import { AmplifyAuthenticatorModule } from '@aws-amplify/ui-angular';
import { FoodTypeComponent } from './food-type/food-type.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
// import { OrderplacedComponent } from './orderplaced/orderplaced.component';
import { FooditemsComponent } from './fooditems/fooditems.component';
//import { OwlDateTimeModule, OwlNativeDateTimeModule } from '@danielmoncada/angular-datetime-picker';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import { BottomSheetComponent } from './bottom-sheet/bottom-sheet.component';
import { MatButtonModule } from '@angular/material/button';
import {MatDialog, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import {MatChipsModule} from '@angular/material/chips';
import { FoodDetailComponent } from './food-detail/food-detail.component';
// import { DatepickerModule } from 'ng2-datepicker';
// import {AngularFireModule} from '@angular/fire/compat';
// import {AngularFireAuthModule} from '@angular/fire/compat/auth';
// const firebaseConfig = {
//   apiKey: "AIzaSyDArL6-25s9XhRptnRbOc97V9IZCmH7myQ",
//   authDomain: "food-order-7e41e.firebaseapp.com",
//   projectId: "food-order-7e41e",
//   storageBucket: "food-order-7e41e.appspot.com",
//   messagingSenderId: "136956368854",
//   appId: "1:136956368854:web:9d392e8c8c51f95b353677",
//   measurementId: "G-GN7LP96799"
// };
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { AuthInterceptor } from './auth.interceptor';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { OrdersheetComponent } from './ordersheet/ordersheet.component';
import {MatSelectModule} from '@angular/material/select';
import { NotificationComponent } from './notification/notification.component';
import {TextFieldModule} from '@angular/cdk/text-field';
//import { HZDatePickerModule } from 'ng2-hz-datepicker';
import {MatTableModule} from '@angular/material/table'; 
@NgModule({
  declarations: [
    
    AppComponent,
    OrderComponentComponent,
    AdminComponent,
    UploadMenuComponent,
    RatingComponent,
    // FeedbackComponent,
    SideNavComponent,
    // CamComponent,
    MyordersComponent,
    // SignUpComponent,
    // SignInComponent,
    ArdsComponent,
    FoodTypeComponent,
    //OrderplacedComponent,
    FooditemsComponent,
    // BottomSheetComponent,
    FoodDetailComponent,
    OrdersheetComponent,
    NotificationComponent,
   // QrCodeGenratorComponent
  ],
  imports: [
   
    MatTableModule,
   //HZDatePickerModule.forRoot(),
    TextFieldModule,
    MatSelectModule,
    MatFormFieldModule,
    BrowserModule,
    MatSidenavModule,
    MatProgressSpinnerModule,
    MatChipsModule,
    MatButtonModule,
    MatBottomSheetModule,
    ReactiveFormsModule,
    FormsModule,
    MatNativeDateModule,
    MatDatepickerModule,
     MatInputModule,
     MatDialogModule,
    // OwlDateTimeModule,
    // OwlNativeDateTimeModule,
    BrowserModule,
    BrowserAnimationsModule,
    // DatepickerModule,
    AmplifyAuthenticatorModule,
    FormsModule,
    // WebcamModule,
    MatToolbarModule,
    MatSidenavModule,
    HttpClientModule,
    // QRCodeModule,
     NotifierModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    // AngularFireModule.initializeApp(firebaseConfig),
    // AngularFireAuthModule,
    // FirebaseUIModule.forRoot(firebaseUiAuthConfig),
    // provideFirebaseApp(() => initializeApp({
    //   apiKey: "AIzaSyDikfwJ4XDWYHGU320P-angJ0w7_NyBuFM",
    //   authDomain: "food-order-85e03.firebaseapp.com",
    //   projectId: "food-order-85e03",
    //   storageBucket: "food-order-85e03.appspot.com",
    //   messagingSenderId: "840501030637",
    //   appId: "1:840501030637:web:284c058def2507f2d626e4",
    //   measurementId: "G-74GZPQJ3MM"
    // })),
  
  ],
  providers: [
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'outline'}},
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
