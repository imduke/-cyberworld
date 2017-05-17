import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage = 'HomePage';

  constructor(platform: Platform) {
    platform.ready().then(() => {

    });
  }
}
