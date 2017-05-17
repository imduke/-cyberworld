import { Component } from '@angular/core';
import { IonicPage, Platform, NavController, MenuController, AlertController, LoadingController } from 'ionic-angular';
import { Facebook } from '@ionic-native/facebook';
import { DataProvider } from '../../providers/data/data';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  loading: any;

  constructor(public nav: NavController, public platform: Platform, public menu: MenuController, public dataService: DataProvider, public alertCtrl: AlertController, public loadingCtrl: LoadingController, public facebook: Facebook) {

    this.loading = this.loadingCtrl.create({
      content: 'Authenticating...'
    });

    this.menu.enable(false);
  }

  login(): void {

    this.loading.present();

    this.facebook.login(['public_profile']).then((response) => {

      this.getProfile();

    }, (err) => {

      let alert = this.alertCtrl.create({
        title: 'Oops!',
        subTitle: 'Something went wrong, please try again later.',
        buttons: ['Ok']
      });

      this.loading.dismiss();
      alert.present();

    });

  }

  getProfile(): void {

    this.facebook.api('/me?fields=id,name,picture', ['public_profile']).then(

      (response) => {

        console.log(response);

        this.dataService.fbid = response.id;
        this.dataService.username = response.name;
        this.dataService.picture = response.picture.data.url;

        this.menu.enable(true);
        this.loading.dismiss();
        this.nav.setRoot('HomePage');

      }, 

      (err) => {

        console.log(err);

        let alert = this.alertCtrl.create({
          title: 'Oops!',
          subTitle: 'Something went wrong, please try again later.',
          buttons: ['Ok']
        });

        this.loading.dismiss();
        alert.present();

      }

    );

  }

}