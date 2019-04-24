import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'add-tag-form',
  templateUrl: './add-tag-form.component.html',
  styleUrls: ['./add-tag-form.component.css']
})
export class AddTagFormComponent implements OnInit {
  //Instance variables
  public name: string = '';
  @Output() add = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  /**
   * Method that will send the data to
   * the parent component, Wrapper.
   */
  onSubmit(data: NgForm) {
    //Send the updated item to the parent
    this.add.emit(data.value);
  }

}
