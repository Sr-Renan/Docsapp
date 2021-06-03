import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { SignupPage} from '../pages/signup/signup';

import firebase from 'firebase';


var firebaseConfig = {
  apiKey: "AIzaSyCfkvGSZr8FYLk4Fn3bX6MIyUgqzVu-uug",
  authDomain: "etecdocs-28ab0.firebaseapp.com",
  databaseURL: "https://etecdocs-28ab0-default-rtdb.firebaseio.com",
  projectId: "etecdocs-28ab0",
  storageBucket: "etecdocs-28ab0.appspot.com",
  messagingSenderId: "769830901975",
  appId: "1:769830901975:web:e004b7b9b68c95d449f892",
  measurementId: "G-JE6QX228Y3"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    SignupPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    SignupPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
