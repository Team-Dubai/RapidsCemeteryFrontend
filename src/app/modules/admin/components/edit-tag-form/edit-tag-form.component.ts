import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Tag } from 'src/app/models/tag';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'edit-tag-form',
  templateUrl: './edit-tag-form.component.html',
  styleUrls: ['./edit-tag-form.component.css']
})
export class EditTagFormComponent implements OnInit {
  //Instance variables
  public id: number = 0;
  public name: string = '';
  public displayEdit: boolean = false;
  @Input() tags: Tag[];
  @Output() update = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  /**
   * Method that will display the update form
   * upon the user choosing, which tag they
   * want to edit.
   */
  edit() {
    this.displayEdit = true;
    let tag = this.getTags().find(tag => tag.id == this.id);
    this.setTag(tag);
  }

  /**
   * Method that will send the data to
   * the parent component, Wrapper.
   */
  onSubmit(data: NgForm) {
    //Send the updated tag to the parent
    this.update.emit(data.value);
    this.displayEdit = false;
  }

  //MUTATORS
  setTag(tag: Tag) {
    this.name = tag.name;
  }

  //ACCESSORS
  getTags() {
    return this.tags;
  }

}
