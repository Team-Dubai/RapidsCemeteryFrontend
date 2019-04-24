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
  public tags: Tag[];
  private filters: string[] = [];
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

  /**
   * Method that will add/remove filters from the list.
   * @param name 
   * @param ele 
   */
  setFilter(name: string, ele: any) {
    //Push the items on if they are not in the list
    if(!this.filters.includes(name)) {
      this.filters.push(name);
    } else {
      for(var i = 0; i < this.filters.length; i++){ 
        if(this.filters[i] === name) {
          this.filters.splice(i, 1); 
          break;
        }
      }
    }
    
    //Toggle the styles of the element
    ele.target.classList.toggle('unselectedTag');
    //Send the filters to the backend
    this.filterItems.emit(this.filters);
  }

}
