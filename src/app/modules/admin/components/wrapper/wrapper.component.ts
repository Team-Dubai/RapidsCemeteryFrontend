import { Component, OnInit } from '@angular/core';
import { ItemService } from 'src/app/services/item.service';
import { TagService } from 'src/app/services/tag.service';
import { Item } from 'src/app/models/item';
import { Tag } from 'src/app/models/tag';
import { Stop } from 'src/app/models/stop';
import { StopService } from 'src/app/services/stop.service';

@Component({
  selector: 'admin-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.css']
})
export class WrapperComponent implements OnInit {
  //Instance variables
  private items: Item[];
  private tags: Tag[];
  private itemObject = {};
  private tagObject = {};

  constructor(private itemService: ItemService, private tagService: TagService, private stopService: StopService) { }

  ngOnInit() {
    this.getAllItems();
    this.getAllTags();
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
   * to retrieve all the tags.
   */
  getAllTags() {
    this.tagService.getTags()
      .subscribe(tag => this.tags = tag);
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
    let itemIdObject = {
      id: parseInt(id)
    };

    this.itemService.deleteItem(itemIdObject).subscribe();
    this.items = this.items.filter(item => item.id !== parseInt(id));
  }

  /**
   * Method that will utilize the tag service
   * to add a specific tag.
   * 
   * @param tag 
   */
  onTagAdd(tag: Tag) {
    //Set and send the object to the API
    //Update the tag in the local array, so it changes on screen without refreshing
    this.setSendTag(tag);
    this.tagService.addItem(this.getSendTag())
      .subscribe(tag => this.tags.push(tag));
  }

  /**
   * Method that will utilize the tag service
   * to update a specific tag.
   * 
   * @param tag 
   */
  onTagUpdate(tag: Tag) {
    //Get the tag that needs to be changed
    let changeTag = this.getItems().find(i => i.id == tag.id);

    //Set and send the object to the API
    //Update the item in the local array, so it changes on screen without refreshing
    this.setSendTag(tag);
    this.tagService.updateTag(this.getSendTag())
      .subscribe(tag => this.setTagInTags(this.getTags().findIndex(i => i.id == changeTag.id), tag));
  }

  /**
   * Method that will utilize the tag service
   * to delete the specified tag.
   * 
   * @param id 
   */
  onTagDelete(id: string) {
    let tagIdObject = {
      id: parseInt(id)
    };

    this.tagService.deleteTag(tagIdObject).subscribe();
    this.tags = this.tags.filter(tag => tag.id !== parseInt(id));
  }

  /**
   * Method that will utilize the stop service
   * to update the specified stop.
   * @param stop 
   */
  onStopAdd(stop: Stop) {
    var stopObj = {
      stop: {
        id: stop.id,
        name: stop.name,
        items: stop.items
      }
    };

    this.stopService.updateStop(stopObj).subscribe()
  }

  //ACCESSORS
  getItems() {
    return this.items;
  }

  getTags() {
    return this.tags;
  }

  getSendItem() {
    return this.itemObject;
  }

  getSendTag() {
    return this.tagObject;
  }

  //MUTATORS
  setItemInItems(index: number, item: Item) {
    this.items[index] = item;
  }

  setTagInTags(index: number, tag: Tag) {
    this.tags[index] = tag;
  }

  setSendItem(item: Item) {
    this.itemObject['item'] = item;
  }

  setSendTag(tag: Tag) {
    this.tagObject['tag'] = tag;
  }
  
}
