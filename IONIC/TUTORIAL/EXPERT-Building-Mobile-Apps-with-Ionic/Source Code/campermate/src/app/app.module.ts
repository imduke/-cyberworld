import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { IonicStorageModule } from '@ionic/storage';
import { GoogleMapsProvider } from '../providers/google-maps/google-maps';
import { ConnectivityProvider } from '../providers/connectivity/connectivity';
import { DataProvider } from '../providers/data/data';
import { Geolocation } from '@ionic-native/geolocation';
import { Network } from '@ionic-native/network';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Keyboard } from '@ionic-native/keyboard';

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    DataProvider,
    GoogleMapsProvider,
    ConnectivityProvider,
    Geolocation,
    Network,
    InAppBrowser,
    StatusBar,
    SplashScreen,
    Keyboard,
    {provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}