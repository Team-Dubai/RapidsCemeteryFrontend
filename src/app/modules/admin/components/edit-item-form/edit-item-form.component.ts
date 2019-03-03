import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {NgForm} from '@angular/forms';
import { Item } from 'src/app/models/item';
import { Tag } from 'src/app/models/tag';

@Component({
  selector: 'edit-item-form',
  templateUrl: './edit-item-form.component.html',
  styleUrls: ['./edit-item-form.component.css']
})
export class EditItemFormComponent implements OnInit {
  //Instance variables
  public id: number = 0;
  public name: string = '';
  public description: string = '';
  public image: string = '';
  public filename: string = '';
  public category: string = '';
  public dateOfBirth: string = '';
  public placeOfBirth: string = '';
  public dateOfDeath: string = '';
  public placeOfDeath: string = '';
  public veteranInformation: string = '';
  public notes: string = '';
  public media: string = '';
  public plot: string = '';
  public displayEdit: boolean = false;
  private item: Item;
  public tags: Tag[];
  @Input() tagsInput: Tag[];
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
   * Method that will detect the change in the select
   * option that way we can update the category of the
   * item and, as a result, dynamically edit the form
   * for the admin to fill out.
   * 
   * @param newValue 
   */
  onChange(newValue: string) {
    this.category = newValue;
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
    //this.update.emit(data.value);
    this.displayEdit = false;
  }

  //MUTATORS
  setItem(item: Item) {
    this.name = item.name;
    this.description = item.description;
    this.category = item.category;
    this.filename = item.image;
    this.tags = item.tags;
    this.dateOfBirth = item.dateOfBirth;
    this.dateOfDeath = item.dateOfDeath;
    this.placeOfBirth = item.placeOfBirth;
    this.placeOfDeath = item.placeOfDeath;
    this.veteranInformation = item.veteranInformation;
    this.notes = item.notes;
    this.plot = item.plot;
    this.media = item.media;
  }

  //ACCESSORS
  getItems() {
    return this.items;
  }

}
