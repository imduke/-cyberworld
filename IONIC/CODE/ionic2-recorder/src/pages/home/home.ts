import { Component } from '@angular/core';
import { NavController, AlertController, Platform } from 'ionic-angular';
import { MediaPlugin, MediaObject } from '@ionic-native/media';
import { File } from '@ionic-native/file';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
_mediaObject : MediaObject;
voiceFilePath : any;
voiceFileName = 'voiceFile.wav';
voiceFileFullPath : string;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, private media: MediaPlugin, private file: File, private platform: Platform) {
    platform.ready().then(() => {
        this.voiceFilePath = this.file.tempDirectory; //documentsDirectory;
        this.voiceFileFullPath = this.voiceFilePath + this.voiceFileName;
    });
  }

startRecording() 
{
  try
  {
      this._mediaObject = this.media.create(this.voiceFileFullPath);
      this._mediaObject.startRecord();
      //window.setTimeout(() => this._mediaObject.stopRecord(), 5000);
  }
  catch(e){
    this.showAlert("ERROR: ");
  }
}

pauseRecording() 
{
  try
  {
      this._mediaObject.pauseRecord();
  }
  catch(e){
    this.showAlert("Could not pause recording.");
  }
}

resumeRecording() 
{
  try
  {
      this._mediaObject.resumeRecord();
  }
  catch(e){
    this.showAlert("Could not resume recording.");
  }
}

stopRecording() {
  try 
  {
    this._mediaObject.stopRecord();
  }
  catch (e) 
  {
    this.showAlert('Could not stop recording.');
  }
}

startPlayback() {
  try 
  {
    this._mediaObject.play();
  }
  catch (e) 
  {
    this.showAlert('Could not play recording.');
  }
}

stopPlayback() {
  try 
  {
    this._mediaObject.stop();
  }
  catch (e) 
  {
    this.showAlert('Could not stop playing recording.');
  }
}

pausePlayback() {
  try 
  {
    this._mediaObject.pause();
  }
  catch (e) 
  {
    this.showAlert('Could not pause playback.');
  }
}

showAlert(message) 
{
  let alert = this.alertCtrl.create({
    title: 'Error',
    subTitle: message,
    buttons: ['OK']
  });
  alert.present();
}

}
