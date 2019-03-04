import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {NgForm} from '@angular/forms';
import { Item } from 'src/app/models/item';
import { Tag } from 'src/app/models/tag';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'edit-item-form',
  templateUrl: './edit-item-form.component.html',
  styleUrls: ['./edit-item-form.component.css']
})
export class EditItemFormComponent implements OnInit {
  //Instance variables
  public id: number = 0;
  public url: string = `https://api.cloudinary.com/v1_1/deduiu1pn/upload`;
  public name: string = '';
  public description: string = '';
  public image: string = '';
  public filename: string = '';
  public category: string = '';
  public dateOfBirth: string = '';
  public placeOfBirth: string = '';
  public dateOfDeath: string = '';
  public placeOfDeath: string = '';
  public veteranInformation: string = '';
  public notes: string = '';
  public media: string = '';
  public plot: string = '';
  public displayEdit: boolean = false;
  private item: Item;
  public tags: Tag[];
  @Input() tagsInput: Tag[];
  @Input() items: Item[];
  @Output() update = new EventEmitter<string>();

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  /**
   * Method that will display the update form
   * upon the user choosing, which item they
   * want to edit.
   */
  edit() {
    this.displayEdit = true;
    let item = this.getItems().find(item => item.id == this.id);
    this.setItem(item);
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
   * Method that will setup the file to be sent 
   * to cloudinary.
   * @param file 
   */
  uploadFile(file) {
    var fd = new FormData();

    fd.append('upload_preset', "ls2g5en7");
    fd.append('tags', 'browser_upload');
    fd.append('file', file);

    return fd;
  }

  /**
   * Method that will get the file from the input.
   * @param event 
   */
  handleFiles(event) {
    this.image = event.target.files[0];
  }

  /**
   * Method that will send the data to
   * the parent component, Wrapper.
   */
  onSubmit(data: NgForm) {
    var fd = this.uploadFile(this.image);
    var obj = data.value;

    if(data.value.image === "") {
      obj['image'] = this.filename;
      //Send the updated item to the parent
      this.update.emit(obj);
      this.displayEdit = false;
    } else {
      this.http.post(this.url, fd).subscribe(image => {
        obj['image'] = image['secure_url'];
        //Send the updated item to the parent
        this.update.emit(obj);
        this.displayEdit = false;
      });
    }
  }

  //MUTATORS
  setItem(item: Item) {
    this.name = item.name;
    this.description = item.description;
    this.category = item.category;
    this.filename = item.image;
    this.tags = item.tags;
    this.dateOfBirth = item.dateOfBirth;
    this.dateOfDeath = item.dateOfDeath;
    this.placeOfBirth = item.placeOfBirth;
    this.placeOfDeath = item.placeOfDeath;
    this.veteranInformation = item.veteranInformation;
    this.notes = item.notes;
    this.plot = item.plot;
    this.media = item.media;
  }

  //ACCESSORS
  getItems() {
    return this.items;
  }

}
