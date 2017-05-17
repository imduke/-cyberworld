import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RecipeDetail } from './recipe-detail';

@NgModule({
  declarations: [
    RecipeDetail
  ],
  imports: [
    IonicPageModule.forChild(RecipeDetail),
  ],
  exports: [
    RecipeDetail
  ]
})
export class RecipeDetailModule {}