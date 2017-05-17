import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { IonicPage, NavController } from 'ionic-angular';
import { Data } from '../../providers/data';
import 'rxjs/add/operator/debounceTime';

@IonicPage()
@Component({
  selector: 'home-page',
  templateUrl: 'home.html'
})
export class HomePage {

	searching: boolean = false;
	searchTerm: string = '';
	searchControl: FormControl;
	categories: any;

	constructor(public navCtrl: NavController, private dataService: Data) {

		this.searchControl = new FormControl();

	}

	ionViewDidLoad(){

	    this.setFilteredCategories();

	    this.searchControl.valueChanges.debounceTime(700).subscribe(search => {

	    	this.searching = false;
	    	this.setFilteredCategories();
	      
	    });
	}

	openRecipeList(recipes){
		this.navCtrl.push('RecipeList', {
			recipes: recipes
		});
	}

	setFilteredCategories(){
		this.dataService.filterCategories(this.searchTerm).then((categories) => {
			this.categories = categories;
		});
	}

	onSearchInput(){
		this.searching = true;
	}

}