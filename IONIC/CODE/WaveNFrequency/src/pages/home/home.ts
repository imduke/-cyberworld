import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { VideoPlayer, VideoOptions} from '@ionic-native/video-player';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  videoOptions : VideoOptions;
  videoUrl : string;

  constructor(private videoPlayer: VideoPlayer, public navCtrl: NavController) {

  }

  async playVideo(){
    try
    {
      this.videoOptions = {
        volume: 0.7
      };
      this.videoUrl = "http://techslides.com/demos/sample-videos/small.mp4";
      //setTimeout(()=>{this.playStop()}, 1000);
      this.videoPlayer.play(this.videoUrl, this.videoOptions);
    }
    catch(e){
      console.error(e);
    }
  }

  playStop(){
    this.videoPlayer.close();
  }

}
