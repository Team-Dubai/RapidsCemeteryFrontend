import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Item } from 'src/app/models/item';

@Component({
  selector: 'edit-item-form',
  templateUrl: './edit-item-form.component.html',
  styleUrls: ['./edit-item-form.component.css']
})
export class EditItemFormComponent implements OnInit {
  //Instance variables
  private id: number = 0;
  private name: string = '';
  private description: string = '';
  private image: string = '';
  private item: Item;
  public displayEdit: boolean = false;
  @Input() items: Item[];
  @Output() update = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  edit() {
    this.displayEdit = true;
    let item = this.getItems().find(item => item.id == this.id);
    this.setItem(item);
  }

  /**
   * Function that will send the data to
   * the parent component, Wrapper.
   */
  onSubmit(data: NgForm) {
    //this.update.emit(data.value);

    //this.displayEdit = true;
  }

  //MUTATORS
  setItem(item: Item) {
    this.name = item.name;
    this.description = item.description;
    this.image = item.image;
  }

  //ACCESSORS
  getItems() {
    return this.items;
  }

}
