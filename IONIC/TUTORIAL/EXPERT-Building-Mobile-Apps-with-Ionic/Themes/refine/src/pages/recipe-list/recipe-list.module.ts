import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RecipeList } from './recipe-list';

@NgModule({
  declarations: [
    RecipeList
  ],
  imports: [
    IonicPageModule.forChild(RecipeList),
  ],
  exports: [
    RecipeList
  ]
})
export class RecipeListModule {}