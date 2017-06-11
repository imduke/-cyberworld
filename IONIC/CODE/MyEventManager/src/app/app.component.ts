import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import firebase from 'firebase';
import { HomePage } from '../pages/home/home';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
        var config = {
          apiKey: "AIzaSyBQtqzpQsHWcCOwin1Jk0RnXPnUgZy3yX0",
          authDomain: "bill-tracker-20e44.firebaseapp.com",
          databaseURL: "https://bill-tracker-20e44.firebaseio.com",
          projectId: "bill-tracker-20e44",
          storageBucket: "bill-tracker-20e44.appspot.com",
          messagingSenderId: "313863193017"
        };

        firebase.initializeApp(config);

        const unsubscribe = firebase.auth().onAuthStateChanged((user) => 
        {
          if (!user) 
          {
            this.rootPage = 'login';
            unsubscribe();
          } else 
          { 
            this.rootPage = HomePage;
            unsubscribe();
          }
        });
        
        platform.ready().then(() => {
        // Okay, so the platform is ready and our plugins are available.
        // Here you can do any higher level native things you might need.
        statusBar.styleDefault();
        splashScreen.hide();
  });
}

}

