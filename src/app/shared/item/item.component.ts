import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Item } from 'src/app/models/item';


@Component({
  selector: 'item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  //Instance variables
  @Input() item: Item;
  @Input() isRegularItem: boolean;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

}
