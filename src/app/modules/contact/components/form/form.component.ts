import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  //Instance variables
  public fromMail: string = '';
  public message: string = '';
  @Output() send = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  /**
   * Method that will send the data to
   * the parent component, Wrapper.
   */
  onSubmit(data: NgForm) {
    //Send the updated item to the parent
    this.send.emit(data.value);
  }

}
