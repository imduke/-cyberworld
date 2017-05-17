import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { IonicPage, NavController } from 'ionic-angular';
import { Data } from '../../providers/data';
import 'rxjs/add/operator/debounceTime';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  categories: any;
  searching: boolean = false;
  searchTerm: string = '';
  searchControl: FormControl;

  constructor(public navCtrl: NavController, public dataService: Data) {
    this.searchControl = new FormControl();
  }

  ionViewDidLoad(){

    this.setFilteredCategories();

    this.searchControl.valueChanges.debounceTime(700).subscribe(search => {

      this.searching = false;
      this.setFilteredCategories();
      
    });

  }

  ionViewDidEnter(){

    //Refresh data every time this page is entered
    this.setFilteredCategories();

  }

  setFilteredCategories(){

    this.dataService.filterCategories(this.searchTerm).then((categories) => {
      this.trimMovies(categories);
    });

  }

  trimMovies(categories){

    this.categories = categories;

  }

  toggleFavouriteMovie(movie){

    this.dataService.toggleFavouriteMovie(movie);

    //Reload data
    this.dataService.load().then((categories) => {
      this.trimMovies(categories);
    });

  }

  onSearchInput(){
    this.searching = true;
  }

  showMovieDetail(movie) {
  	this.navCtrl.push('MovieDetail', {
      movie: movie
    });
  }

  showViewCategory(category) {
  	this.navCtrl.push('ViewCategory', {
      category: category
    });
  }

  showWatchList() {
  	this.navCtrl.push('WatchList');
  }

}