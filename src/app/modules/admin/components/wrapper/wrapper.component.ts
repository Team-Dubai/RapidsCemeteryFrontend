import { Component, OnInit } from '@angular/core';
import { ItemService } from 'src/app/services/item.service';
import { Item } from 'src/app/models/item';

@Component({
  selector: 'admin-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.css']
})
export class WrapperComponent implements OnInit {
  //Instance variables
  private items: Item[];

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
   * Function that will utilize the item service
   * to delete the specified item.
   * @param id 
   */
  onDelete(id: string) {
    console.log("Delete: " + id);
  }
  
}
