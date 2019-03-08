import { Component, OnInit } from '@angular/core';

import { UsersInterface } from "./interfaces/users";

import { UserService } from "./user.service";

import { StorageService } from "./services/storage.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'an7';
  userInterface: UsersInterface;
  userData: UsersInterface;

  constructor(private users: UserService, private _storageService: StorageService) {

  }

  ngOnInit() {
    //this._storageService.theItem = "KKKK";
    console.log(localStorage.getItem("theItem"));
    //console.log(this.getAllUsers());
    this._storageService.itemValue.subscribe((nextValue) => {
      console.log(nextValue);  // this will happen on every change
    })
  }

  onClickMe() {
    this.users.getUsers().subscribe(data => {
      this.userData = data;
      console.log(this.userData);
    });
  }


}
