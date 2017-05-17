import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AudioBlackboxPage } from './audio-blackbox';

@NgModule({
  declarations: [
    AudioBlackboxPage,
  ],
  imports: [
    IonicPageModule.forChild(AudioBlackboxPage),
  ],
  exports: [
    AudioBlackboxPage
  ]
})
export class AudioBlackboxPageModule {}
