import { Component, OnInit } from '@angular/core';
import { WebcamImage, WebcamInitError, WebcamUtil } from 'ngx-webcam';
import { Subject, Observable } from 'rxjs';

@Component({
  selector: 'app-cam',
  templateUrl: './cam.component.html',
  styleUrls: ['./cam.component.css']
})
export class CamComponent implements OnInit {

  constructor(public webcamImage: WebcamImage) { }

   // toggle webcam on/off
   public showWebcam = true;
   public allowCameraSwitch = true;
   public multipleWebcamsAvailable = false;
  //  public deviceId: string;
   public facingMode: string = 'environment';
   public messages: any[] = [];
 
   // latest snapshot
   
 
   // webcam snapshot trigger
   private trigger: Subject<void> = new Subject<void>();
   // switch to next / previous / specific webcam; true/false: forward/backwards, string: deviceId
   private nextWebcam: Subject<boolean|string> = new Subject<boolean|string>();
 
   public ngOnInit(): void {
     this.readAvailableVideoInputs();
   }
 
   public triggerSnapshot(): void {
     this.trigger.next();
   }
 
   public toggleWebcam(): void {
     this.showWebcam = !this.showWebcam;
   }
 
   public handleInitError(error: WebcamInitError): void {
     this.messages.push(error);
     if (error.mediaStreamError && error.mediaStreamError.name === 'NotAllowedError') {
       this.addMessage('User denied camera access');
     }
   }
 
   public showNextWebcam(directionOrDeviceId: boolean|string): void {
     // true => move forward through devices
     // false => move backwards through devices
     // string => move to device with given deviceId
     this.nextWebcam.next(directionOrDeviceId);
   }
 
   public handleImage(webcamImage: WebcamImage): void {
     this.addMessage('Received webcam image');
     console.log(webcamImage);
     this.webcamImage = webcamImage;
   }
 
   public cameraWasSwitched(deviceId: string): void {
     this.addMessage('Active device: ' + deviceId);
    //  this.deviceId = deviceId;
     this.readAvailableVideoInputs();
   }
 
   addMessage(message: any): void {
     console.log(message);
     this.messages.unshift(message);
   }
 
   public get triggerObservable(): Observable<void> {
     return this.trigger.asObservable();
   }
 
   public get nextWebcamObservable(): Observable<boolean|string> {
     return this.nextWebcam.asObservable();
   }
 
   public get videoOptions(): MediaTrackConstraints {
     const result: MediaTrackConstraints = {};
     if (this.facingMode && this.facingMode !== '') {
       result.facingMode = { ideal: this.facingMode };
     }
 
     return result;
   }
 
   private readAvailableVideoInputs() {
     WebcamUtil.getAvailableVideoInputs()
       .then((mediaDevices: MediaDeviceInfo[]) => {
         this.multipleWebcamsAvailable = mediaDevices && mediaDevices.length > 1;
       });
   }

}
