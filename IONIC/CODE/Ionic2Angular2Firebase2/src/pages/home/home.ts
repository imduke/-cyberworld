
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
  billList: FirebaseListObservable<any>;

 constructor(public afAuth: AngularFireAuth, public afDatabase: AngularFireDatabase) {
    this.billList = afDatabase.list('/bills');
    this.user = this.afAuth.authState;
}

login() {
    this.afAuth.auth.signInAnonymously();
}

logout() {
    this.afAuth.auth.signOut();
}

Send(billName: string, billAmount: number, billDueDate: string, billPaid: boolean) {
    this.billList.push({"name":billName,"amount":billAmount,"dueDate":billDueDate,"paid":billPaid});
}

}