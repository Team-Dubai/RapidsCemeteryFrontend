import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  //Instance variables
  public username: string = '';
  public password: string = '';
  @Output() authorize = new EventEmitter<string>();
  @Input() error: boolean;
  @Input() errorMessage: string;

  constructor() { }

  ngOnInit() {
  }

  /**
   * Method that will send the data to
   * the parent component, admin.
   */
  onSubmit(data: NgForm) {
    //Send the updated item to the parent
    this.authorize.emit(data.value);
  }

}
