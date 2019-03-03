import { Component, OnInit, ViewChild } from '@angular/core';
import { CardComponent } from 'src/app/shared/card/card.component';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['../../../../../assets/css/information.component.css']
})
export class InformationComponent implements OnInit {
  //Instance variables
  public filter: string[] = [];
  @ViewChild(CardComponent) child: CardComponent;

  constructor() { }

  ngOnInit() {
  }

  /**
   * Method that will set the filter array, so the
   * child component could receive it.
   * @param filterListFromChild 
   */
  onFilterChange(filterListFromChild: string[]) {
    this.filter = filterListFromChild;
    console.log(this.filter);
    this.child.filterData();
  }

}
