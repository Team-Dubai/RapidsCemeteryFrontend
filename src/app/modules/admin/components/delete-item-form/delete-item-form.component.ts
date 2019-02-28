import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Item } from 'src/app/models/item';

@Component({
  selector: 'delete-item-form',
  templateUrl: './delete-item-form.component.html',
  styleUrls: ['./delete-item-form.component.css']
})
export class DeleteItemFormComponent implements OnInit {
  //Instance variables
  @Input() items: Item[];
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
