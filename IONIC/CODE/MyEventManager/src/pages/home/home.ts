import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import {LoginPage} from '../login/login';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public authProvider: AuthProvider) {
  }

  goLogOff(){
    this.authProvider.logoutUser('imduke@gmail.com');
    this.navCtrl.push(LoginPage);
  }

}
