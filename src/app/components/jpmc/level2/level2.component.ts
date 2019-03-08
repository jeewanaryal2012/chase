import { Component, OnInit } from '@angular/core';
import { ShareService } from "../../services/share.service";

@Component({
  selector: 'app-level2',
  templateUrl: './level2.component.html',
  styleUrls: ['./level2.component.scss']
})
export class Level2Component implements OnInit {
  listData = [];
  constructor(private _shareService: ShareService) { }

  ngOnInit() {
    console.log(this._shareService.getData());
    this.listData = this._shareService.getData();
  }

}
