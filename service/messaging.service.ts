import { Injectable } from '@angular/core';
import { AngularFireMessaging } from '@angular/fire/messaging';
import { BehaviorSubject } from 'rxjs'
import { HttpClient } from '@angular/common/http';
@Injectable()
export class MessagingService {
  public baseURL: 'https://fcm.googleapis.com/fcm/send';
  currentMessage = new BehaviorSubject(null);
  constructor(private angularFireMessaging: AngularFireMessaging, private http: HttpClient) {
    // this.angularFireMessaging.messaging.subscribe(
    //   (_messaging) => {
    //     _messaging.onMessage = _messaging.onMessage.bind(_messaging);
    //     _messaging.onTokenRefresh = _messaging.onTokenRefresh.bind(_messaging);
    //   }
    // )
  }
  requestPermission() {
    this.angularFireMessaging.requestToken.subscribe(
      (token) => {
        console.log(token);
      },
      (err) => {
        console.error('Unable to get permission to notify.', err);
      }
    );
  }

 
  receiveMessage() {
    this.angularFireMessaging.messages.subscribe(
      (payload) => {
        console.log("new message received. ", payload);
        this.currentMessage.next(payload);
      })
  }
  ngOnInit(){
  //   for(var i=0; i<5; i++) {
  //     setTimeout(function(){
  //       this.http.post(this.baseURL + 
  //   { 
  //     "notification": {
  //      "title": "Hey there", 
  //      "body": "Subscribe to mighty ghost hack youtube channel"
  //     },
  //     "to" : "cZYXKE2WuhrQzO9uXFsiiB:APA91bE7usc2mFPO0YCSQWCs8em55evTbgZ9zvj2L1lUv054aakwJnlE4-Oh42XxPedHKHtu1HQGLuWZowYkI8DrAfHfMRs5w-ZtXzb0gCf2Wz56y7fwcCR7mJ3T_HYBZXxX52M1JOI3"
  //    },
     
  //   {
  //     "Authorization": 'key=AAAAiMs-z1A:APA91bG_wveEA88bxv4TnDt4RYQsCy45TgA0e0iNLkErXqQA4xQLXxkbJvQYJac5Coxd_f6ZIeaPmhcmpwf1Gq-wdGyc1fgiOnCImSek1ALIQbLDjYpSIJkSuncVZH897yzWS4PaaGZa'
  //   })
    
  //  }, 3000);
  
  //     }
  }
  
 
 }





