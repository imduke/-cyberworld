import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Storage } from '@ionic/storage';
import 'rxjs/add/operator/map';

@Injectable()
export class Data {

	data: any;
	categories: any;

	constructor(public http: Http, public storage: Storage) {

	}

	load(){

		if(this.categories){
			return Promise.resolve(this.categories);
		}

		return new Promise(resolve => {

			this.storage.get('data').then((data) => {

				if(data && typeof(data) !== "undefined"){

					//Load data from storage
					this.data = JSON.parse(data);
					this.categories = this.data.categories;
					resolve(this.categories);

				} else {

					//Load data from source
					this.http.get('assets/data/movie-data.json').subscribe(res => {
				        this.data = res.json();
				        this.categories = this.data.categories;
				        this.storage.set('data', JSON.stringify(this.data));
				        resolve(this.categories);
		      		});

				}

			});

		});
	}

	filterCategories(searchTerm){

		return new Promise(resolve => {

			this.load().then((data) => {

				let filteredCategories = [];

				for(let i = 0; i < this.categories.length; i++){

					let filteredCategory = {
						title: this.categories[i].title,
						items: []
					};

					this.categories[i].items.filter((movie) => {

						if(movie.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1){
							filteredCategory.items.push(movie);
						}

					});

					if(filteredCategory.items.length > 0){
						filteredCategories.push(filteredCategory);
					}

				}

			    resolve(filteredCategories);	

			});

		});

	}

	filterMovies(searchTerm, movies){

	    return movies.filter((movie) => {
	    	return movie.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
	    });	

	}

	toggleFavouriteMovie(movie){

		let updatedMovie = movie;

		updatedMovie.favourite = !updatedMovie.favourite;

		this.updateMovie(updatedMovie);

	}

	updateMovie(movie){

		for(let i = 0; i < this.categories.length; i++){

			let index = this.categories[i].items.indexOf(movie);

			if(index > -1){
				this.categories[i].items[index] = movie;
			}

		}

		this.data.categories = this.categories;
		this.storage.set('data', JSON.stringify(this.data));

	}

	getFavouriteMovies(){

		let favouriteMovies = [];

		for(let i = 0; i < this.categories.length; i++){

			this.categories[i].items.filter((movie) => {
				if(movie.favourite){
					favouriteMovies.push(movie);
				}
			});

		}

		return favouriteMovies;

	}

}