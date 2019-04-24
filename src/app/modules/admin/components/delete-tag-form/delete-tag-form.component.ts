import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Tag } from 'src/app/models/tag';

@Component({
  selector: 'delete-tag-form',
  templateUrl: './delete-tag-form.component.html',
  styleUrls: ['./delete-tag-form.component.css']
})
export class DeleteTagFormComponent implements OnInit {
  //Instance variables
  @Input() tags: Tag[];
  @Output() delete = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  /**
   * Function that will send the data to
   * the parent component, Wrapper.
   */
  onSubmit(data: NgForm) {
    this.delete.emit(data.value.id);
  }

}
