/**
 * CODE TAKEN FROM A FORKED REPO THAT TEAM DUBAI HAS ALSO FORKED. INSTEAD OF INSTALLING THE PACKAGE
 * THROUGH NPM, WE FELT IT WERE BEST TO FORK THE REPO AND TAKE THE CONTENTS TO ENSURE NOTHING WAS 
 * CHANGED THAT WOULD BREAK THE CODEBASE. IN ADDITION, SOME CODE CHANGES WERE MADE BY OUR TEAM, SO
 * THAT WE COULD CONSTRUCT IT FOR OUR USE.
 * 
 * ORIGINAL AUTHOR: Maiyaporn Phanich
 * URL: https://github.com/maiyaporn/angular2-wizard
 * 
 * FORKED AUTHOR: Luis Daniel
 * URL: https://github.com/3dluis/angular2-wizard
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'wizard-step',
  template:
  `
    <div [hidden]="!isActive">
      <ng-content></ng-content>
    </div>
  `
})
export class WizardStepComponent {
  @Input() title: string;
  @Input() hidden: boolean = false;
  @Input() isValid: boolean = true;
  @Input() showNext: boolean = true;
  @Input() showPrev: boolean = true;

  @Output() onNext: EventEmitter<any> = new EventEmitter<any>();
  @Output() onPrev: EventEmitter<any> = new EventEmitter<any>();
  @Output() onComplete: EventEmitter<any> = new EventEmitter<any>();

  private _isActive: boolean = false;
  isDisabled: boolean = true;

  constructor() { }

  @Input('isActive')
  set isActive(isActive: boolean) {
    this._isActive = isActive;
    this.isDisabled = false;
  }

  get isActive(): boolean {
    return this._isActive;
  }

}
