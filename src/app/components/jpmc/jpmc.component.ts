import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jpmc',
  templateUrl: './jpmc.component.html',
  styleUrls: ['./jpmc.component.scss']
})
export class JpmcComponent implements OnInit {

  radioList = [
    { id: "1", value: "Radio 1" }, { id: "2", value: "Radio 2" }, { id: "3", value: "Radio 3" }, { id: "4", value: "Radio 4" }
  ];

  selected = [];

  result = [];

  constructor() { }

  ngOnInit() {
  }

  onSelectionChange(list, checkedValue) {
    if (checkedValue === "y") {
      this.selected.push({
        id: list.id,
        value: list.value,
        check: checkedValue
      });
    } else if (checkedValue === "n") {
      this.selected = this.selected.filter(function (obj) {
        return obj.id !== list.id;
      });
    }
  }

  valueExixts(obj): boolean {
    return true;
  }

  nextPage() {
    this.result = this.selected.filter((elem, index, self) => self.findIndex(
      (t) => { return (t.id === elem.id) }) === index);
  }

}
