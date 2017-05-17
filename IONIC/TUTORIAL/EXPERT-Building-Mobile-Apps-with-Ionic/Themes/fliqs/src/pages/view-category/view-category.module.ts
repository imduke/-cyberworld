import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ViewCategory } from './view-category';

@NgModule({
  declarations: [
    ViewCategory,
  ],
  imports: [
    IonicPageModule.forChild(ViewCategory),
  ],
  exports: [
    ViewCategory
  ]
})
export class ViewCategoryModule {}