import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ItemComponent } from '../item/item.component';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor(private modal: NgbModal) { }

  ngOnInit() {
  }

  /**
   * Method that will open the modal with the passed
   * in component.
   */
  open() {
    this.modal.open(ItemComponent);
  }
}
