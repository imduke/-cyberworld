import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Data } from '../../providers/data';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import 'rxjs/add/operator/debounceTime';

@IonicPage()
@Component({
  selector: 'recipe-list-page',
  templateUrl: 'recipe-list.html'
})
export class RecipeList {

	recipes: any;
	filteredRecipes: any;
	searching: boolean = false;
	searchTerm: string = '';
	searchControl: FormControl;

	constructor(private navCtrl: NavController, private navParams: NavParams, private dataService: Data) {
		this.searchControl = new FormControl();
		this.recipes = this.navParams.get('recipes');
		this.filteredRecipes = this.recipes;
	}

	ionViewDidLoad() {

	    this.searchControl.valueChanges.debounceTime(700).subscribe(search => {

	    	this.searching = false;
	    	this.setFilteredRecipes();
	      
	    });
	}

	setFilteredRecipes() {
		this.filteredRecipes = this.dataService.filterRecipes(this.searchTerm, this.recipes);
	}

	openRecipeDetail(recipe) {
		this.navCtrl.push('RecipeDetail', {
			recipe: recipe
		});
	}

	onSearchInput() {
		this.searching = true;
	}
}