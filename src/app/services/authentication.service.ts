import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Config } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  //Instance variables
  private adminUrl = 'https://rapidscemeteryapi-dev.herokuapp.com/login';
  
  constructor(private http: HttpClient) { }

  /**
   * Method that will use the Angular http client
   * to retrieve data from the API by username and password.
   */
  getUserByCredentials(credentials: object): Observable<HttpResponse<Config>> {
    return this.http.post<Config>(this.adminUrl, credentials, {observe: 'response'});
  }

}
