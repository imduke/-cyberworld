import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MovieDetail } from './movie-detail';

@NgModule({
  declarations: [
    MovieDetail,
  ],
  imports: [
    IonicPageModule.forChild(MovieDetail),
  ],
  exports: [
    MovieDetail
  ]
})
export class MovieDetailModule {}