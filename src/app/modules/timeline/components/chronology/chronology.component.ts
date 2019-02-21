/**
 * CODE TAKEN FROM A REPO THAT TEAM DUBAI HAS FORKED. INSTEAD OF INSTALLING THE PACKAGE
 * THROUGH NPM, WE FELT IT WERE BEST TO FORK THE REPO AND TAKE THE CONTENTS TO ENSURE NOTHING WAS 
 * CHANGED THAT WOULD BREAK THE CODEBASE. IN ADDITION, SOME CODE CHANGES WERE MADE BY OUR TEAM, SO
 * THAT WE COULD CONSTRUCT IT FOR OUR USE.
 * 
 * ORIGINAL AUTHOR: Jeremy Reed
 * URL: https://github.com/JR33D/ngx-chronology
 */
import { Component, Input, ContentChild } from '@angular/core';
import { IChronologyEvent } from '../../../../models/chronology-event.interface';
import { ChronologyTitleDirective, ChronologyContentDirective } from '../../directives/layout.directive';

@Component({
   selector: 'ngx-chronology',
   templateUrl: './chronology.component.html',
   styleUrls: ['./chronology.component.css'],
})
export class ChronologyComponent {
   @Input() public events: Array<IChronologyEvent>;
   @Input() public title: string;

   @ContentChild(ChronologyTitleDirective) titleTemplate: ChronologyTitleDirective;
   @ContentChild(ChronologyContentDirective) contentTemplate: ChronologyContentDirective;

   constructor() {}

   getIconInfo(event: IChronologyEvent) {
      if (!event.icon) {
         return ['far', 'dot-circle'];
      } else {
         return [event.faLibrary, event.icon];
      }
   }
}
