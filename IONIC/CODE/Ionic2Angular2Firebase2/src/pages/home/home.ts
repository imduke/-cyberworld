
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import {Observable} from 'rxjs/Observable';
@Component({
  templateUrl: 'home.html',
})
export class HomePage {
  user: Observable<firebase.User>;
  albumList: FirebaseListObservable<any>;

 constructor(public afAuth: AngularFireAuth, public afDatabase: AngularFireDatabase) {
    this.albumList = afDatabase.list('/album');
    this.user = this.afAuth.authState;
}

login() {
    this.afAuth.auth.signInAnonymously();
}

logout() {
    this.afAuth.auth.signOut();
}

Send(albumName: string, billAmount: string, albumPlayTime: string, albumImage: string) {
    this.albumList.push({"album_name":albumName,"album_play_time":albumPlayTime,"album_image":albumImage});
}

}