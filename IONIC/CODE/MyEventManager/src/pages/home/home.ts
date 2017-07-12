import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import {LoginPage} from '../login/login';
import { AudioProvider } from 'ionic-audio';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage
{
    myTracks: any[];
    allTracks: any[];
    selectedTrack: number;

    constructor(public navCtrl: NavController, public authProvider: AuthProvider, private _audioProvider: AudioProvider) 
    {
    this.myTracks = [
    {
      src: 'https://firebasestorage.googleapis.com/v0/b/bill-tracker-20e44.appspot.com/o/Caress%2F01-Caress.mp3?alt=media&token=f14402cf-33bf-43ad-b764-9b51ae672f80',
      artist: 'Marcel Khalife',
      title: 'Caress',
      art: 'assets/img/caress.gif',
      preload: 'metadata' // tell the plugin to preload metadata such as duration for this track,  set to 'none' to turn off
    },
    {
      src: 'https://firebasestorage.googleapis.com/v0/b/bill-tracker-20e44.appspot.com/o/Caress%2F02-Al_Hambra.mp3?alt=media&token=6b61ad86-6e03-42bd-8e2c-a322175fcf2a',
      artist: 'Marcel Khalife',
      title: 'Al Hambra',
      art: 'assets/img/caress.gif',
      preload: 'metadata' // tell the plugin to preload metadata such as duration for this track, set to 'none' to turn off
    },
    {
      src: 'https://firebasestorage.googleapis.com/v0/b/bill-tracker-20e44.appspot.com/o/Caress%2F03-Granada.mp3?alt=media&token=73e4b02c-7244-4b1e-8c58-724e170406b9',
      artist: 'Marcel Khalife',
      title: 'Granada',
      art: 'assets/img/caress.gif',
      preload: 'metadata' // tell the plugin to preload metadata such as duration for this track, set to 'none' to turn off
    },
    {
      src: 'https://firebasestorage.googleapis.com/v0/b/bill-tracker-20e44.appspot.com/o/Caress%2F04-Tents.mp3?alt=media&token=d2a06a2d-0869-4531-824f-dd2f11057a7d',
      artist: 'Marcel Khalife',
      title: 'Tents',
      art: 'assets/img/caress.gif',
      preload: 'metadata' // tell the plugin to preload metadata such as duration for this track, set to 'none' to turn off
    },
    {
      src: 'https://firebasestorage.googleapis.com/v0/b/bill-tracker-20e44.appspot.com/o/Caress%2F05-With_All_The_Love.mp3?alt=media&token=370f408b-4387-49b5-8e33-3dd06f97778c',
      artist: 'Marcel Khalife',
      title: 'With All The Love',
      art: 'assets/img/caress.gif',
      preload: 'metadata' // tell the plugin to preload metadata such as duration for this track, set to 'none' to turn off
    },
    {
      src: 'https://firebasestorage.googleapis.com/v0/b/bill-tracker-20e44.appspot.com/o/Caress%2F06-Popular_Cafe.mp3?alt=media&token=2cc89bf7-7502-49f4-b7c0-ab1302350b85',
      artist: 'Marcel Khalife',
      title: 'Popular Cafe',
      art: 'assets/img/caress.gif',
      preload: 'metadata' // tell the plugin to preload metadata such as duration for this track, set to 'none' to turn off
    },
    {
      src: 'https://firebasestorage.googleapis.com/v0/b/bill-tracker-20e44.appspot.com/o/Caress%2F07-Chaza.mp3?alt=media&token=1661a0fb-b79e-4706-91ea-921aaada3263',
      artist: 'Marcel Khalife',
      title: 'Chaza',
      art: 'assets/img/caress.gif',
      preload: 'metadata' // tell the plugin to preload metadata such as duration for this track, set to 'none' to turn off
    }
    ];

    }

    ngAfterContentInit()
    {     
      // get all tracks managed by AudioProvider so we can control playback via the API
      this.allTracks = this._audioProvider.tracks; 
    }
    
    goLogOff()
    {
      this.authProvider.logoutUser();
      this.navCtrl.push(LoginPage);
    }

    playSelectedTrack() 
    {
      // use AudioProvider to control selected track 
      this._audioProvider.play(this.selectedTrack);
    }
  
    pauseSelectedTrack() 
    {
       // use AudioProvider to control selected track 
       this._audioProvider.pause(this.selectedTrack);
    }
         
    onTrackFinished(track: any) 
    {
      console.log('Track finished', track)
    } 

    goToProfile()
    { 
      this.navCtrl.push('profile');
    }

    goToCreate()
    { 
      this.navCtrl.push('event-create'); 
    } 
    
    goToList()
    { 
      this.navCtrl.push('event-list'); 
    }
 
}