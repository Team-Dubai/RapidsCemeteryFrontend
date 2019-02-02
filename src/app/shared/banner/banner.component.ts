import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  //Instance variables
  private title: string;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.setTitle(this.activatedRoute.data['value']['title']);
  }

  //MUTATORS
  setTitle(title: string) {
    this.title = title;
  }

  //ACCESSORS
  getTitle() {
    return this.title;
  }
}
