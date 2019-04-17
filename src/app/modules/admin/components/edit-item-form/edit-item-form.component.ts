import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectorRef} from '@angular/core';
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
  public images: string[] = [];
  public filename: string = '';
  public filenames: string[] = [];
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
  private checkedTags: Tag[] = [];
  @Input() tagsInput: Tag[];
  @Input() items: Item[];
  @Output() update = new EventEmitter<string>();

  constructor(private http: HttpClient, private cdRef: ChangeDetectorRef) { }

  ngOnInit() {
  }

  /**
   * Method that will loop through and check all of the tags that
   * are set for the specific item.
   */
  setupTags() {
    var checkedValues: string[] = []; 
    this.checkedTags = [];

    for(var i = 0; i < this.tags.length; i++) {
      checkedValues.push(this.tags[i].name);
      this.checkedTags.push(this.tags[i]);
    }

    //Grab the elements and then loop through checking/unchecking the necessary tags
    var element = document.getElementsByClassName("form-check-label-edit");
    var elementInput = document.getElementsByClassName("form-check-input-edit");
    for(var i = 0; i < element.length; i++) {
      var ele = <HTMLLabelElement> element[i];
      var eleInput = <HTMLInputElement> elementInput[i];
      if(checkedValues.includes(ele.textContent)) {
        eleInput.checked = true;
      } else {
        eleInput.checked = false;
      }
    }
  }

  /**
   * Store and keep track of the checked/unchecked tags. This will
   * fire every time a tag is touched.
   * @param tag 
   */
  onCheckChange(tag: Tag) {
    var isRemove = false;
    //Loop through to see if we have the tag
    for(var i = 0; i < this.checkedTags.length; i++) {
      if(this.checkedTags[i].name === tag.name) {
        isRemove = true;
      }
    }

    //If we have the tag, then remove it
    //else add it.
    if(!isRemove) {
      this.checkedTags.push(tag);
    } else {
      for(var i = 0; i < this.checkedTags.length; i++){ 
        if(this.checkedTags[i].name === tag.name) {
          this.checkedTags.splice(i, 1); 
          break;
        }
      }
    }
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
    //ngIf has been displayed, so detect the changes, then set the tags
    this.cdRef.detectChanges();
    this.setupTags();
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
    for(var i = 0; i < event.target.files.length; i++) {
      if(!this.images.includes(event.target.files[i])) {
        this.images.push(event.target.files[i]);
      }
    }
  }

  /**
   * Method that will send the data to
   * the parent component, Wrapper.
   */
  onSubmit(data: NgForm) {
    var obj = data.value;
    obj['images'] = [];
    data.value['tags'] = this.checkedTags;

    if(this.images.length === 0) {
      obj['images'] = this.filename;
      //Send the updated item to the parent
      this.update.emit(obj);
      this.displayEdit = false;

      //Reset arrays
      this.images = [];
      this.checkedTags = [];
    } else {
      //Loop through and send the images to cloudinary
      for(let i = 0; i < this.images.length; i++) {
        var fd = this.uploadFile(this.images[i]);
        this.http.post(this.url, fd).subscribe(image => this.editImages(obj, image['secure_url'], i, () => {
          //Once we reach the end of the list, then send to the API
          if(this.images.length-1 === i) {
            this.sendUpdate(obj);
          }
        }));
      }
    }
  }

  /**
   * Method that will tell the parent method to send the data to the API.
   * @param obj 
   */
  sendUpdate(obj) {
    //Send the updated item to the parent
    this.update.emit(obj);
    this.displayEdit = false;

    //Reset arrays
    this.images = [];
    this.checkedTags = [];
  }

  /**
   * Function that will add images to an object, then use
   * a callback once completed. This is to ensure the image is
   * not empty upon sending to the API.
   */
  editImages(obj, imageItem, index, callback) {
    obj['images'].push(imageItem);
    callback();
  }

  //MUTATORS
  setItem(item: Item) {
    this.name = item.name;
    this.description = item.description;
    this.category = item.category;
    this.filename = item.image;
    this.filenames = item.image.split(',');
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

