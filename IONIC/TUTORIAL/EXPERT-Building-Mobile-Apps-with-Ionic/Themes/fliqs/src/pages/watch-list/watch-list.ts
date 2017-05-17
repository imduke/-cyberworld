import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { Data } from '../../providers/data';

@IonicPage()
@Component({
  selector: 'page-watch-list',
  templateUrl: 'watch-list.html'
})
export class WatchList {

	movies: any;	

	constructor(private navCtrl: NavController, private dataService: Data) {

	}

	ionViewWillEnter(){
		this.movies = this.dataService.getFavouriteMovies();
	}

	showMovieDetail(movie) {
		this.navCtrl.push('MovieDetail', {
	  		movie: movie
		});
	}

	toggleFavouriteMovie(movie){
		
		this.dataService.toggleFavouriteMovie(movie);

		let index = this.movies.indexOf(movie);

		if(index > -1){
			this.movies.splice(index, 1);
		}

	}

}