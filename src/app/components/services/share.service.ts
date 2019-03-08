import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShareService {
  sharedData = [];
  constructor() { }

  setData(data) {
    this.sharedData = data;
  }

  getData() {
    return this.sharedData;
  }
}
