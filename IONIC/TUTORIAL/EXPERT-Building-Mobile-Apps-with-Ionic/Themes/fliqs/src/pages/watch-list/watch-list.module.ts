import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WatchList } from './watch-list';

@NgModule({
  declarations: [
    WatchList,
  ],
  imports: [
    IonicPageModule.forChild(WatchList),
  ],
  exports: [
    WatchList
  ]
})
export class WatchListModule {}