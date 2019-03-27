import { Component, OnInit, ViewChild } from '@angular/core';
import { CardComponent } from 'src/app/shared/card/card.component';
import { StopService } from 'src/app/services/stop.service';
import { Stop } from 'src/app/models/stop';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['../../../../../assets/css/information.component.css']
})
export class InformationComponent implements OnInit {
  //Instance variables
  public filter: string[] = [];
  public stops: Stop[];
  private fullStopsArr: Stop[] = [];
  @ViewChild(CardComponent) child: CardComponent;

  constructor(private stopService: StopService) { }

  ngOnInit() {
    this.getAllStops();
  }

  //Scroll to the top of the panel, if possible
  displayPanel(el: HTMLElement) {
    document.getElementById(el['panelId']+'-header').scrollIntoView();
  }

  /**
   * Method that will set the filter array, so the
   * child component could receive it.
   * @param filterListFromChild 
   */
  onFilterChange(filterListFromChild: string[]) {
    this.filter = filterListFromChild;
    //this.child.filterData();
    this.filterData();
  }

  /**
   * Method that will handle the filtering of the
   * items.
   */
  filterData() {
    var result = [];

    if(this.fullStopsArr.length === 0) {
      this.fullStopsArr = this.stops;
    } else {
      this.stops = this.fullStopsArr;
    }

    //Loop through and only show the stops that have at least
    //one item that matches the filter
    if(this.filter.length !== 0) {
      this.stops.forEach(stop => {
        stop.items.forEach(item => {
          item.tags.forEach(tag => {
            if(this.filter.indexOf(tag.name) !== -1 && !result.includes(stop)) {
              result.push(stop);
            }
          });
        });
      });
      /*var result = this.stops.filter(stop => {
        stop.items.forEach(item => {
          item.tags.some(tag => this.filter.indexOf(tag.name) !== -1)
        });
      });
      
      this.stops = result;*/
      this.stops = result;
    }
  }

  /**
   * Method that will utilize the tour service
   * to retrieve all the stops.
   */
  getAllStops() {
    this.stopService.getStops()
      .subscribe(stops => {
        for(var i=0; i < stops.length; i++) {
          for(var j=0; j < stops[i].items.length; j++) {
            if(stops[i].items[j].image === null) {
              continue;
            }
            stops[i].items[j].images = stops[i].items[j].image.split(',');
            stops[i].items[j].image = stops[i].items[j].images[0];
          }
        }

        this.stops = stops
      });
  }

}
