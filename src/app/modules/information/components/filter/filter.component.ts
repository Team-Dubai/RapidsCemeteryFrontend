import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Tag } from 'src/app/models/tag';
import { TagService } from 'src/app/services/tag.service';

@Component({
  selector: 'filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  //Instance variables
  public isCollapsed = true;
  private tags: Tag[];
  private filter: string[] = [];
  @Output() filterItems = new EventEmitter<string[]>();

  constructor(private tagService: TagService) { }

  ngOnInit() {
    this.getAllTags();
  }

  /**
   * Method that will utilize the item service
   * to retrieve all the tags.
   */
  getAllTags() {
    this.tagService.getTags()
      .subscribe(tag => this.tags = tag);
  }

  setFilter(name: string, ele) {
    if(!this.filter.includes(name)) {
      this.filter.push(name);
    } else {
      for(var i = 0; i < this.filter.length; i++){ 
        if(this.filter[i] === name) {
          this.filter.splice(i, 1); 
          break;
        }
      }
    }
    
    ele.target.classList.toggle('unselectedTag');
    this.filterItems.emit(this.filter);
  }

}
