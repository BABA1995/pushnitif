import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

import { MessagingService } from '../../service/messaging.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'push-notification';
  public baseURL: 'https://fcm.googleapis.com/fcm/send';
  message;
  constructor(private messagingService: MessagingService, private http: HttpClient) { }
ngOnInit() {
  
  
    
       this.messagingService.requestPermission()
          this.messagingService.receiveMessage()
          this.message = this.messagingService.currentMessage;
  
 
//   for(var i=0; i<5; i++) {
//     setTimeout(function(){
//       this.http.post(this.baseURL + 
//   { 
//     "notification": {
//      "title": "Hey there", 
//      "body": "Subscribe to mighty ghost hack youtube channel"
//     },
//     "to" : "cZYXKE2WuhrQzO9uXFsiiB:APA91bE7usc2mFPO0YCSQWCs8em55evTbgZ9zvj2L1lUv054aakwJnlE4-Oh42XxPedHKHtu1HQGLuWZowYkI8DrAfHfMRs5w-ZtXzb0gCf2Wz56y7fwcCR7mJ3T_HYBZXxX52M1JOI3"
//    }
//   ,
//   {
//     headers
//   })
  
//  }, 3000);

//     }
  }
 
}