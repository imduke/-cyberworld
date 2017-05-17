import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class Data {

	data: any;

	constructor(private http: Http) {

	}

	load(){

		if(this.data){
			return Promise.resolve(this.data);
		}

		return new Promise(resolve => {

			this.http.get('assets/data/recipe-data.json').subscribe(res => {
		        this.data = res.json();
		        resolve(this.data);
      		});

		});
	}

	filterCategories(searchTerm){

		return new Promise(resolve => {

			this.load().then((data) => {

			    let filteredData = data.categories.filter((category) => {
			    	return category.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
			    });	

			    resolve(filteredData);	

			});

		});

	}

	filterRecipes(searchTerm, recipes){

	    return recipes.filter((recipe) => {
	    	return recipe.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
	    });	

	}

}