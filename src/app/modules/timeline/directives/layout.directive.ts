/**
 * CODE TAKEN FROM A REPO THAT TEAM DUBAI HAS FORKED. INSTEAD OF INSTALLING THE PACKAGE
 * THROUGH NPM, WE FELT IT WERE BEST TO FORK THE REPO AND TAKE THE CONTENTS TO ENSURE NOTHING WAS 
 * CHANGED THAT WOULD BREAK THE CODEBASE. IN ADDITION, SOME CODE CHANGES WERE MADE BY OUR TEAM, SO
 * THAT WE COULD CONSTRUCT IT FOR OUR USE.
 * 
 * ORIGINAL AUTHOR: Jeremy Reed
 * URL: https://github.com/JR33D/ngx-chronology
 */
import { Directive, TemplateRef } from '@angular/core';

@Directive({ selector: '[ngxChronologyTitle]' })
export class ChronologyTitleDirective {
   constructor(public templateRef: TemplateRef<any>) {}
}

@Directive({ selector: '[ngxChronologyContent]' })
export class ChronologyContentDirective {
   constructor(public templateRef: TemplateRef<any>) {}
}
