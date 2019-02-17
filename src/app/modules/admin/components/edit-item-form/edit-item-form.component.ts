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
  private filename: string = '';
  private category: string = '';
  private item: Item;
  public displayEdit: boolean = false;
  @Input() items: Item[];
  @Output() update = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  /**
   * Method that will display the update form
   * upon the user choosing, which item they
   * want to edit.
   */
  edit() {
    this.displayEdit = true;
    let item = this.getItems().find(item => item.id == this.id);
    this.setItem(item);
  }

  /**
   * Method that will send the data to
   * the parent component, Wrapper.
   */
  onSubmit(data: NgForm) {
    //Since you can't set a default value for an image,
    //we need to check and see if the user chose one.
    if(data.value.image === "") {
      data.value.image = this.filename;
    }

    //Send the updated item to the parent
    this.update.emit(data.value);

    //Clear all the fields and do not display them
    this.name = '';
    this.description = '';
    this.category = '';
    this.displayEdit = false;
  }

  //MUTATORS
  setItem(item: Item) {
    this.name = item.name;
    this.description = item.description;
    this.category = item.category;
    this.filename = item.image;
  }

  //ACCESSORS
  getItems() {
    return this.items;
  }

}
