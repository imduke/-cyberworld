import { Component, NgZone } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import firebase from 'firebase';

import { HomePage } from '../pages/home/home';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
    firebase.initializeApp({
    apiKey: "AIzaSyC4GNdJxoGWYYhROLJkxsqsPhj_p-T8iOA",
    authDomain: "ionic2auth-bca7c.firebaseapp.com",
    databaseURL: "https://ionic2auth-bca7c.firebaseio.com",
    projectId: "ionic2auth-bca7c",
    storageBucket: "ionic2auth-bca7c.appspot.com",
    messagingSenderId: "726269127754"
  });
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

