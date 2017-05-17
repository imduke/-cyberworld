import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Data } from '../../providers/data';

@IonicPage()
@Component({
  selector: 'page-movie-detail',
  templateUrl: 'movie-detail.html'
})
export class MovieDetail {

	@ViewChild('trailer') trailer: any;
	trailerPlaying: any = false;

	movie: any;

	constructor(public navCtrl: NavController, public navParams: NavParams, public dataService: Data) {

		this.movie = this.navParams.get('movie');

	}

	toggleFavouriteMovie(movie){
		this.dataService.toggleFavouriteMovie(movie);
	}

	togglePlay(){

		this.trailerPlaying ? this.trailer.nativeElement.pause() : this.trailer.nativeElement.play();
		
		this.trailerPlaying = !this.trailerPlaying;
	}

}

