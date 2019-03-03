import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ItemComponent } from '../item/item.component';
import { ItemService } from 'src/app/services/item.service';
import { Item } from 'src/app/models/item';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  //Instance variables
  private fullItemsArr: Item[] = [];
  private items: Item[];
  private burials: Item[];
  private trails: Item[];
  @Input() filters: string[];
  @Input() whichItem: string;

  constructor(private modal: NgbModal, private itemService: ItemService) { }

  ngOnInit() {
    //Check to see if we need to get a regular item
    //for the info table or a specific item for the
    //complete list of burials
    if(this.whichItem === "info") {
      this.getAllItems();
    } else if(this.whichItem === "burial") {
      this.getAllBurials();
    } else if(this.whichItem === "trail") {
      this.getAllTrails();
    }
  }

  /**
   * Method that will open the modal with the passed
   * in component.
   */
  open(id: number) {
    var modelRef = this.modal.open(ItemComponent);
    
    //Check to see if we are clicking on a regular
    //item or a burial specific item
    if(this.whichItem === "info") {
      let item = this.getItems().find(item => item.id === id);
      modelRef.componentInstance.item = item;

      //An info object can be any of the categories
      if(item.category === "GRAVE") {
        modelRef.componentInstance.whichItem = "burial";
      } else if(item.category === "TRAIL") {
        modelRef.componentInstance.whichItem = "trail";
      } else {
        modelRef.componentInstance.whichItem = this.whichItem;
      }
    } else if(this.whichItem === "burial") {
      modelRef.componentInstance.item = this.getBurials().find(item => item.id === id);
      modelRef.componentInstance.whichItem = this.whichItem;
    } else if(this.whichItem === "trail") {
      modelRef.componentInstance.item = this.getTrails().find(item => item.id === id);
      modelRef.componentInstance.whichItem = this.whichItem;
    }
  }

  /**
   * Method that will utilize the item service
   * to retrieve all the items.
   */
  getAllItems() {
    this.itemService.getItems()
      .subscribe(item => this.items = item);
  }

  /**
   * Method that will utilize the item service
   * to retrieve all the items that are burials.
   */
  getAllBurials() {
    //Create the object to send to the API
    let categoryObject = {
      category: 'GRAVE'
    };

    this.itemService.getItemsByCategory(categoryObject)
      .subscribe(burial => this.burials = burial);
  }

  /**
   * Method that will utilize the item service
   * to retrieve all the items that are trails.
   */
  getAllTrails() {
    //Create the object to send to the API
    let categoryObject = {
      category: 'TRAIL'
    };

    this.itemService.getItemsByCategory(categoryObject)
      .subscribe(trail => this.trails = trail);
  }

  /**
   * Method that will handle the filtering of the
   * items.
   */
  filterData() {
    if(this.fullItemsArr.length === 0) {
      this.fullItemsArr = this.getItems();
    } else {
      this.items = this.fullItemsArr;
    }

    if(this.filters.length !== 0) {
      var result = this.items.filter(item => item.tags.some(tag => this.filters.indexOf(tag.name) !== -1));
      this.items = result;
    }    
  }

  //ACCESSORS
  getItems() {
    return this.items;
  }

  getBurials() {
    return this.burials;
  }

  getTrails() {
    return this.trails;
  }
}
