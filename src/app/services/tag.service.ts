import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Tag } from '../models/tag';

const httpOptions = {
  headers: new HttpHeaders({ 'JWT': localStorage.getItem('token') })
};

@Injectable({
  providedIn: 'root'
})
export class TagService {
  //Instance variables
  private tagsUrl = 'https://rapidscemeteryapi-dev.herokuapp.com/api/tag/';

  constructor(private http: HttpClient) { }

  /**
   * Method that will use the Angular http client
   * to retrieve data from the API.
   */
  getTags(): Observable<Tag[]> {
    return this.http.get<Tag[]>(this.tagsUrl+'getAllTags');
  }

  /**
   * Method that will use the Angular http client to add a tag
   * using the API.
   * @param tag 
   */
  addItem(tag: object): Observable<Tag> {
    return this.http.post<Tag>(this.tagsUrl+'saveTag', tag);
  }

  /**
   * Method that will use the Angular http client to update a tag
   * using the API.
   * @param tag 
   */
  updateTag(tag: object): Observable<Tag> {
    return this.http.post<Tag>(this.tagsUrl+'saveTag', tag);
  }

  /**
   * Method that will use the Angular http client to delete a tag
   * using the API.
   * @param tagIdObject 
   */
  deleteTag(tagIdObject: object): Observable<boolean> {
    return this.http.post<boolean>(this.tagsUrl+'removeTagById', tagIdObject);
  }
}
