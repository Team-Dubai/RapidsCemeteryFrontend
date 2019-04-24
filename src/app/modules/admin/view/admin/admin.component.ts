import { Component, OnInit, Input } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  //Instance variables
  private isLoggedIn: boolean = false;
  public error: boolean = false;
  private _errorMessage: string = '';
  
  @Input()
  set errorMessage(message: string) {
    this._errorMessage = message;
  }

  constructor(private authService: AuthenticationService) { }

  ngOnInit() {
    //Check to see if the session exists. If so, then
    //do not force them to login again
    if(localStorage.getItem('token') !== null) {
      this.isLoggedIn = true;
    }
  }

  /**
   * Method that will utilize the authentication service
   * to determine whether the users credentials are valid.
   * @param credentials 
   */
  checkUser(credentials: object) {
    this.authService.getUserByCredentials(credentials)
      .subscribe(response => {
        //Check the response, so we can respond accordingly
        if(response.status === 200) {
          if(response.headers.get('jwt') === null) {
            this.errorMessage = "Incorrect username or password";
            this.error = true;
          }
          this.setSession(response.headers.get('jwt'))
        } else {
          this.errorMessage = "Oops.. something went wrong. Please try again!"
          this.error = true;
        }
      });
  }

  /**
   * Method that will set the token using local storage.
   * This way users will not have to keep logging in
   * everytime they want to make a change.
   * 
   * @param token 
   */
  setSession(token: string) {
    if(token !== null) {
      localStorage.setItem('token', token);
      this.isLoggedIn = true;
    }
  }

  /**
   * Method that will destroy the session when the
   * admin logs out.
   */
  destroySession() {
    localStorage.removeItem("token");
    this.isLoggedIn = false;
  }

  //ACCESSORS
  getIsLoggedIn() {
    return this.isLoggedIn;
  }

}
