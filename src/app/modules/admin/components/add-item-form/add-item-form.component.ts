import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'add-item-form',
  templateUrl: './add-item-form.component.html',
  styleUrls: ['./add-item-form.component.css']
})
export class AddItemFormComponent implements OnInit {
  //Instance variables
  public name: string = '';
  public description: string = '';
  public image: string = '';
  public category: string = '';
  public dateOfBirth: string = '';
  public placeOfBirth: string = '';
  public dateOfDeath: string = '';
  public placeOfDeath: string = '';
  public veteranInformation: string = '';
  public notes: string = '';
  public media: string = '';
  public plot: string = '';
  @Output() add = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
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
    //If the image is empty, then let's use a default one
    if(data.value.image === "") {
      data.value.image = '../../../../assets/img/Unknown.png';
    }

    //Send the updated item to the parent
    this.add.emit(data.value);
  }

}
