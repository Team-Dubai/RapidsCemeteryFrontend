import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

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
  private category: string = '';
  @Output() add = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  /**
   * Method that will send the data to
   * the parent component, Wrapper.
   */
  onSubmit(data: NgForm) {
    //If the image is empty, then let's use a default one
    if(data.value.image === "") {
      data.value.image = 'Unknown.png';
    }

    //Send the updated item to the parent
    this.add.emit(data.value);
  }

}
