import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Data } from '../../providers/data';
import 'rxjs/add/operator/debounceTime';

@IonicPage()
@Component({
  selector: 'page-view-category',
  templateUrl: 'view-category.html'
})
export class ViewCategory {

	category: any;
	movies: any;
	searching: boolean = false;
	searchTerm: string = '';
	searchControl: FormControl;

	constructor(public navCtrl: NavController, public navParams: NavParams, public dataService: Data) {
		
		this.searchControl = new FormControl();

		this.category = this.navParams.get('category');
		this.movies = this.category.items;
		
	}

	ionViewDidLoad(){

	    this.searchControl.valueChanges.debounceTime(700).subscribe(search => {

	      this.searching = false;
	      this.setFilteredMovies();
	      
	    });

	}

	setFilteredMovies(){
		this.movies = this.dataService.filterMovies(this.searchTerm, this.category.items)
	}

	onSearchInput(){
		this.searching = true;
	}

	toggleFavouriteMovie(movie){
		this.dataService.toggleFavouriteMovie(movie);
	}

	showMovieDetail(movie) {
		this.navCtrl.push('MovieDetail', {
			movie: movie
		});
	}
  
}