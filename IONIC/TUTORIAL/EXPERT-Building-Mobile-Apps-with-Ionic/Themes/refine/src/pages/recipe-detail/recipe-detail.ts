import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'recipe-detail-page',
  templateUrl: 'recipe-detail.html'
})
export class RecipeDetail {

	recipe: any;

	constructor(private navCtrl: NavController, private navParams: NavParams) {
		this.recipe = this.navParams.get('recipe');
	}

	ionViewDidLoad(){
		
	}

}