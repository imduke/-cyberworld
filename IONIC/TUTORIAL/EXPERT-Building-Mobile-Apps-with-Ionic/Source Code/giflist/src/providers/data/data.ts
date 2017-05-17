import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable()
export class DataProvider {

  constructor(public storage: Storage) {

  }

  getData(): Promise<any> {
    return this.storage.get('settings');
  }

  save(data): void {
    let newData = JSON.stringify(data);
    this.storage.set('settings', newData);
  }

}