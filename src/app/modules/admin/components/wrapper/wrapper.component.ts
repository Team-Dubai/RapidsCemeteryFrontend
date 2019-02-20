import { Component, OnInit } from '@angular/core';
import { ItemService } from 'src/app/services/item.service';
import { Item } from 'src/app/models/item';
import { Tag } from 'src/app/models/tag';

@Component({
  selector: 'admin-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.css']
})
export class WrapperComponent implements OnInit {
  //Instance variables
  private items: Item[];
  private itemObject = {};

  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.getAllItems();
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
   * to add a specific item.
   * 
   * @param item 
   */
  onItemAdd(item: Item) {
    //Set and send the object to the API
    //Update the item in the local array, so it changes on screen without refreshing
    this.setSendItem(item);
    this.itemService.addItem(this.getSendItem())
      .subscribe(item => this.items.push(item));
  }

  /**
   * Method that will utilize the item service
   * to update a specific item.
   * 
   * @param item 
   */
  onItemUpdate(item: Item) {
    //Get the item that needs to be changed
    let changeItem = this.getItems().find(i => i.id == item.id);

    //Set and send the object to the API
    //Update the item in the local array, so it changes on screen without refreshing
    this.setSendItem(item);
    this.itemService.updateItem(this.getSendItem())
      .subscribe(item => this.setItemInItems(this.getItems().findIndex(i => i.id == changeItem.id), item));
  }

  /**
   * Function that will utilize the item service
   * to delete the specified item.
   * 
   * @param id 
   */
  onItemDelete(id: string) {
    console.log("Delete: " + id);
  }

  /**
   * Method that will utilize the tag service
   * to add a specific tag.
   * 
   * @param tag 
   */
  onTagAdd(tag: Tag) {
    console.log(tag);
  }

  /**
   * Method that will utilize the tag service
   * to update a specific tag.
   * 
   * @param tag 
   */
  onTagUpdate(tag: Tag) {
    console.log(tag);
  }

  /**
   * Function that will utilize the tag service
   * to delete the specified tag.
   * 
   * @param id 
   */
  onTagDelete(id: string) {
    console.log("Delete: " + id);
  }

  //ACCESSORS
  getItems() {
    return this.items;
  }

  getSendItem() {
    return this.itemObject;
  }

  //MUTATORS
  setItemInItems(index: number, item: Item) {
    this.items[index] = item;
  }

  setSendItem(item: Item) {
    this.itemObject['item'] = item;
  }
  
}
