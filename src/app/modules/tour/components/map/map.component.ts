import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  //Instance variables
  private stopsRect: any = [];
  private stopsLetter: any = [];
  private tourStop: number;

  constructor() { }

  ngOnInit() {
    //Set the values, so we can manipulate the map
    this.stopsRect = document.getElementsByTagNameNS('http://www.w3.org/2000/svg', 'rect');
    this.stopsLetter = document.getElementsByTagNameNS('http://www.w3.org/2000/svg', 'text');
    this.tourStop = 0;
  }

  /**
   * Method that will display the next stop on the map.
   * 
   * @param el 
   */
  nextStop(el: HTMLElement) {
    this.highlightStop("increase");
    el.scrollIntoView(false);
  }

  /**
   * Method that will display the previous stop on the map.
   * 
   * @param el 
   */
  prevStop(el: HTMLElement) {
    this.highlightStop("decrease");
    el.scrollIntoView(false);
  }

  /**
   * Method that will end the tour and force a restart.
   * 
   * @param el 
   */
  endTour(el: HTMLElement) {
    this.highlightStop(null);
    el.scrollIntoView(false);
  }

  /**
   * Method that will highlight the stop that the
   * user is on.
   * 
   * @param whichWay 
   */
  highlightStop(whichWay: string) {
    //Remove the highlight from the stop
    this.stopsRect[this.tourStop].removeAttribute('id');
    this.stopsLetter[this.tourStop].removeAttribute('id');

    //Increment variable to show we are moving stops
    if(whichWay === "decrease") {
      this.tourStop--;
    } else if(whichWay === "increase") {
      this.tourStop++;
    } else {
      this.tourStop = 0;
    }

    ////Add the highlight to the stop
    this.stopsRect[this.tourStop].setAttribute('id', 'active-rect');
    this.stopsLetter[this.tourStop].setAttribute('id', 'active-letter');
  }
}
