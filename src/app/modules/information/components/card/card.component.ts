import { Component, OnInit } from '@angular/core';
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
  private items: Item[];

  constructor(private modal: NgbModal, private itemService: ItemService) { }

  ngOnInit() {
    this.getAllItems();
  }

  /**
   * Method that will open the modal with the passed
   * in component.
   */
  open(id: number) {
    var modelRef = this.modal.open(ItemComponent);
    modelRef.componentInstance.item = this.getItems().find(item => item.id === id);
  }

  /**
   * Method that will utilize the item service
   * to retrieve all the items.
   */
  getAllItems() {
    this.itemService.getItems()
      .subscribe(item => this.items = item);
  }

  //ACCESSORS
  getItems() {
    return this.items;
  }
}
