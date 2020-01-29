import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireStorageModule } from '@angular/fire/storage';

import { AboutPage } from '../pages/about/about';
import {DenemeService} from '../pages/deneme.service';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
export const environment ={
  production: false,
  firebaseConfig : {
    apiKey: "AIzaSyDMrQff6vnTxcpneRESNAwCP4GOmhWOnQ4",
    authDomain: "ahssystem-20df7.firebaseapp.com",
    databaseURL: "https://ahssystem-20df7.firebaseio.com",
    projectId: "ahssystem-20df7",
    storageBucket: "ahssystem-20df7.appspot.com",
    messagingSenderId: "597255625587",
    appId: "1:597255625587:web:5c32957fc47a8e5d06c306",
    measurementId: "G-MM81NTKTR8"}
} 
@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    DenemeService
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
   AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireStorageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
