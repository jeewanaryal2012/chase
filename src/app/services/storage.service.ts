import { Injectable } from '@angular/core';

import { Observable, Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  itemValue = new Subject();


  constructor() {
    this.theItem = "HEY";
  }

  set theItem(value) {
    this.itemValue.next(value); // this will make sure to tell every subscriber about the change.
    localStorage.setItem('theItem', value);
  }

  get theItem() {
    return localStorage.getItem('theItem');
  }


}
