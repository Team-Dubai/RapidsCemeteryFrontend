import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Item } from 'src/app/models/item';

@Component({
  selector: 'add-item-form',
  templateUrl: './add-item-form.component.html',
  styleUrls: ['./add-item-form.component.css']
})
export class AddItemFormComponent implements OnInit {
  //Instance variables
  private name: string = '';
  private description: string = '';
  private image: string = '';
  private filename: string = '';
  private category: string = '';
  private item: Item;
  @Output() update = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  /**
   * Method that will send the data to
   * the parent component, Wrapper.
   */
  onSubmit(data: NgForm) {
    console.log(data.value);
    //Since you can't set a default value for an image,
    //we need to check and see if the user chose one.
    /*if(data.value.image === "") {
      data.value.image = this.filename;
    }*/

    //Send the updated item to the parent
    //this.update.emit(data.value);
  }

}
