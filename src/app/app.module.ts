import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireMessagingModule } from '@angular/fire/messaging';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';
import { MessagingService } from '../../service/messaging.service';
import { environment } from '../environments/environment';
import { AsyncPipe } from '../../node_modules/@angular/common';
import { ServiceWorkerModule } from '@angular/service-worker';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
   declarations: [AppComponent],
   imports: [
      AppRoutingModule,
      BrowserModule,
      AngularFireDatabaseModule,
      AngularFireAuthModule,
      AngularFireMessagingModule,
      HttpClientModule,
      AngularFireModule.initializeApp(environment.firebase),
      ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
   ],
   providers: [MessagingService,AsyncPipe],
   bootstrap: [AppComponent]
})
export class AppModule { }
