import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  //Instance variables
  public username: string = '';

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit() {
  }

  /**
   * Method that will send the data to
   * the API.
   */
  onSubmit(data: NgForm) {
    this.authenticationService.sendForgotPassword(data.value).subscribe();
  }

}
