import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Stop } from 'src/app/models/stop';
import { StopService } from 'src/app/services/stop.service';
import { Item } from 'src/app/models/item';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'add-stop-form',
  templateUrl: './add-stop-form.component.html',
  styleUrls: ['./add-stop-form.component.css']
})
export class AddStopFormComponent implements OnInit {
  //Instance Variables
  public stops: Stop[];
  public items: Item[];
  public stop: string = '';
  private stopName: string;
  private checkedItems: Item[] = [];
  @Output() add = new EventEmitter<string>();

  constructor(private stopService: StopService, private itemService: ItemService) { }

  ngOnInit() {
    this.getAllStops();
    this.getAllItems();
  }

  /**
   * Method that will get all the stops
   * from the DB.
   */
  getAllStops() {
    this.stopService.getStops()
      .subscribe(stops => this.stops = stops);
  }

  /**
   * Method that will get all items from the
   * DB.
   */
  getAllItems() {
    this.itemService.getItems()
      .subscribe(items => this.items = items)
  }

  /**
   * Method that will check the items that are within
   * the chosen stop.
   * @param newValue 
   */
  onChange(newValue: string) {
    var checkedValues: string[] = []; 
    this.checkedItems = [];

    //If we have a value and its not null, then update its items
    if(newValue) {
      this.stopName = newValue;
      //Filter the stops array and loop through the both arrays
      //to determine the items we need to check
      var filteredStops = this.stops.filter(stop => stop.name === this.stopName);
      for(var i = 0; i < filteredStops[0].items.length; i++) {
        for(var j = 0; j < this.items.length; j++) {
          if(filteredStops[0].items[i].id === this.items[j].id) {
            checkedValues.push(this.items[j].name);
            this.checkedItems.push(this.items[j]);
          }
        }
      }

      //Grab the elements and then loop through checking/unchecking the necessary items
      var element = document.getElementsByClassName("form-check-input");
      for(var i = 0; i < element.length; i++) {
        var ele = <HTMLInputElement> element[i];
        if(checkedValues.includes(ele.value)) {
          ele.checked = true;
        } else {
          ele.checked = false;
        }
      }
    }
  }

  /**
   * Store and keep track of the checked/unchecked items. This will
   * fire every time an item is touched.
   * @param item 
   */
  onCheckChange(item: Item) {
    //If we have the item, then remove it
    //else add it.
    if(!this.checkedItems.includes(item)) {
      this.checkedItems.push(item);
    } else {
      for(var i = 0; i < this.checkedItems.length; i++){ 
        if(this.checkedItems[i].name === item.name) {
          this.checkedItems.splice(i, 1); 
          break;
        }
      }
    }
  }

  /**
   * Method that will send the data to
   * the parent component, Wrapper.
   */
  onSubmit(data: NgForm) {
    //Loop through to get the id and add it to the data object
    for(var i = 0; i < this.stops.length; i++) {
      if(this.stops[i].name === data.value.name) {
        data.value['id'] = this.stops[i].id;
        break;
      }
    }

    data.value['items'] = this.checkedItems;
    
    //Send the stop to the parent
    this.add.emit(data.value);
  }

}
