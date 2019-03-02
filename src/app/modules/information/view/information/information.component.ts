import { Component, OnInit } from '@angular/core';
import { Tag } from 'src/app/models/tag';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['../../../../../assets/css/information.component.css']
})
export class InformationComponent implements OnInit {
  private filter: string[];

  constructor() { }

  ngOnInit() {
  }

  onFilterChange(filterListFromChild: string[]) {
    this.filter = filterListFromChild;
  }

}
