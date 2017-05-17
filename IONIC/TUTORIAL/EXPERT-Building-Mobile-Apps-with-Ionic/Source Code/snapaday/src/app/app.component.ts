import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { LocalNotifications } from '@ionic-native/local-notifications';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage = 'HomePage';

  constructor(platform: Platform, localNotifications: LocalNotifications) {
    platform.ready().then(() => {

      if(platform.is('cordova')){

        localNotifications.isScheduled(1).then( (scheduled) => {

          if(!scheduled){

            let firstNotificationTime = new Date();
            firstNotificationTime.setHours(firstNotificationTime.getHours()+24);

            localNotifications.schedule({
              id: 1,
              title: 'Snapaday',
              text: 'Have you taken your snap today?',
              at: firstNotificationTime,
              every: 'day'
            });

          }

        });

      }

    });
  }
}