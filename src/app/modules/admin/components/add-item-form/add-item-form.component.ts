import { Component, OnInit, Input, Output, EventEmitter, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Tag } from 'src/app/models/tag';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'add-item-form',
  templateUrl: './add-item-form.component.html',
  styleUrls: ['./add-item-form.component.css']
})
export class AddItemFormComponent implements OnInit {
  //Instance variables
  public name: string = '';
  public url: string = `https://api.cloudinary.com/v1_1/deduiu1pn/upload`;
  public description: string = '';
  public image: string = '';
  public images: string[] = [];
  public category: string = '';
  public dateOfBirth: string = '';
  public placeOfBirth: string = '';
  public dateOfDeath: string = '';
  public placeOfDeath: string = '';
  public veteranInformation: string = '';
  public notes: string = '';
  public media: string = '';
  public plot: string = '';
  public tags: Tag[];
  private checkedTags: Tag[] = [];
  @Input() tagsInput: Tag[];
  @Output() add = new EventEmitter<string>();

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  /**
   * Store and keep track of the checked/unchecked items. This will
   * fire every time an item is touched.
   * @param tag 
   */
  onCheckChange(tag: Tag) {
    //If we have the item, then remove it
    //else add it.
    if(!this.checkedTags.includes(tag)) {
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
      obj['images'] = 'https://res.cloudinary.com/deduiu1pn/image/upload/v1551723636/dvdmvgfsmpunrw7ql4ax.png';
      //Send the updated item to the parent
      this.add.emit(obj);

      //Reset arrays
      this.images = [];
      this.checkedTags = [];
    } else {
      for(var i = 0; i < this.images.length; i++) {
        var fd = this.uploadFile(this.images[i]);
  
        this.http.post(this.url, fd).subscribe(image => {
          obj['images'].push(image['secure_url']);
        });

        if(this.images.length-1 === i) {
          this.add.emit(obj);
        }
      }

      //Reset arrays
      this.images = [];
      this.checkedTags = [];
    }
  }

}
